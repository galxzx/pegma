import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_QUIZZES  = 'SET_QUIZZES'
export const SET_TASKS    = 'SET_TASKS'

/* ------------   ACTION CREATORS     ------------------ */

export const setQuizzes   = (quizzes) => ({ type: SET_QUIZZES, quizzes })
export const setTasks     = (tasks) => ({ type: SET_TASKS, tasks })


/* ------------       REDUCERS     ------------------ */

const initialState = {
  quizzes: [],
  tasks: []
}

export default function reducer(prevState = initialState, action) {

  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case SET_QUIZZES:
      newState.quizzes = action.quizzes
      break

    case SET_TASKS:
      newState.tasks = action.tasks
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// Add a new user

export const loadQuizzes = () => (dispatch) => {
  axios.get(`/api/library/quizzes`)
    .then(res => res.data)
    .then(quizzes => dispatch(setQuizzes(quizzes)))
    .catch(err => console.error(err))
}

export const loadTasks = () => (dispatch) => {
  axios.get(`/api/library/tasks`)
    .then(res => res.data)
    .then(tasks => dispatch(setTasks(tasks)))
    .catch(err => console.error(err))
}

export const loadLibrary = () => (dispatch) => {
  axios.get(`/api/library/quizzes`)
    .then(res => res.data)
    .then(quizzes => dispatch(setQuizzes(quizzes)))
    .catch(err => console.error(err))
  axios.get(`/api/library/tasks`)
    .then(res => res.data)
    .then(tasks => dispatch(setTasks(tasks)))
    .catch(err => console.error(err))
}

export const addQuiz = () => (dispatch, getState) => {
  const newQuiz = getState().form.createquiz.values;
  const questions = newQuiz.questions.map(question => {
    let answer = []
    for (let key in question) {
      if(key.startsWith('a_')) {
        answer[+key.split('_')[1]] = question[key]
      }
    }
    return Object.assign(question, {answer, type:'multiple-choice'})
  })
  const formattedQuiz = Object.assign({}, newQuiz, {questions, teacher_id: getState().auth.teacher_id} )
  return axios.post('/api/library/quiz', formattedQuiz)
    .then(() => dispatch(loadLibrary))
    .then(() => browserHistory.push('/teacher/assignments'))
    .catch(err => console.error(err))
}

export const addTask = () => (dispatch, getState) => {
  const newTask = getState().form.createtask.values
  const teacher_id = getState().auth.teacher_id
  return axios.post('/api/library/task', Object.assign(newTask, {teacher_id}))
    .then(() => dispatch(loadLibrary))
    .then(() => browserHistory.push('/teacher/assignments'))
    .catch(err => console.error(err))
}
