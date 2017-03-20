import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_ASSIGNMENTS          = 'SET_ASSIGNMENTS'
export const SET_CURRENT_ASSIGNMENT   = 'SET_CURRENT_ASSIGNMENT'
export const SET_TEACHER              = 'SET_TEACHER'
export const SET_QUIZ                 = 'SET_QUIZ'


/* ------------   ACTION CREATORS     ------------------ */

export const setAssignments           = (assignments) => ({ type: SET_ASSIGNMENTS, assignments })
export const setCurrentAssignment     = (assignment) => ({ type: SET_CURRENT_ASSIGNMENT, assignment })
export const setTeacher               = (teacher) => ({ type: SET_TEACHER, teacher })
export const setQuiz                  = (quiz) => ({ type: SET_QUIZ, quiz})


/* ------------       REDUCERS     ------------------ */

const initialState = {
  assignments: [],
  currentAssignment: {id: 1, due_date: '2017-04-01', student_id: 1, status:'inProgress', teacher_id: 1, type:'quiz', quiz_id: 3, reward: 3, ETC: '2017-5-11', quiz_answers:{}},
  teacher: {},
  quiz: { questions:[] }
}

export default function reducer(prevState = initialState, action) {

  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case SET_ASSIGNMENTS:
      newState.assignments = action.assignments
      break

    case SET_CURRENT_ASSIGNMENT:
      newState.currentAssignment = action.assignment
      break

    case SET_TEACHER:
      newState.teacher = action.teacher
      break

    case SET_QUIZ:
      newState.quiz = action.quiz
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// Add a new user

export const loadAssignments = () => (dispatch, getState) => {
  let studentId = getState().auth.student_id
  axios.get(`/api/students/${studentId}/assingments`)
    .then(res => res.data)
    .then(assignments => dispatch(setAssignments(assignments)))
    .catch(err => console.error(err))
}

export const loadCurrentAssignment = (assignmentId) => (dispatch, getState) => {
  let studentId = getState().auth.student_id
  return axios.get(`/api/students/${studentId}/assingments/${assignmentId}`)
    .then(res => res.data)
    .then(assignment => {
      dispatch(setCurrentAssignment(assignment))
      return assignment
    })
    .catch(err => console.error(err))
}

export const loadStudent = () => (dispatch, getState) => {
  let studentId = getState().auth.student_id
  axios.get(`/api/students/${studentId}/`)
    .then(res => res.data)
    .then(student => {
      dispatch(setAssignments(student.assignments))
      dispatch(setTeacher(student.teacher))
    })
    .catch(err => console.error(err))
}

export const loadQuiz = (quizId) => (dispatch) => {
  axios.get(`/api/library/quizzes/${quizId}`)
    .then(res => res.data)
    .then(quiz => dispatch(setQuiz(quiz)))
    .catch(err => console.error(err))
}

export const gradeQuiz = () => (dispatch, getState) => {
  const state = getState()
  const quizAnswers = state.form.quiz.values
  const quizLength = state.student.quiz.questions.length
  const grade = state.student.quiz.questions.reduce((current, next) =>{
    if(+next.solution === +quizAnswers[`q_${next.id}`]) return current + 1;
    else return current;
  }, 0) / quizLength * 100
  axios.put(`/api/students/${state.student.currentAssignment.student_id}/assignments/${state.student.currentAssignment.id}`,
    {status:'completed', grade, quiz_answers: quizAnswers})
    .then(res => res.data)
    .then(assignment => {
      dispatch(setCurrentAssignment(assignment))
      browserHistory.push(`/student/assignment/${assignment.id}/completedQuiz`)
    })
    .catch(err => console.error(err))
}
