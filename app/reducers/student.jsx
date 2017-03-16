import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_ASSIGNMENTS          = 'SET_ASSIGNMENTS'
export const SET_CURRENT_ASSIGNMENT   = 'SET_CURRENT_ASSIGNMENT'
export const SET_TEACHER              = 'SET_TEACHER'


/* ------------   ACTION CREATORS     ------------------ */

export const setAssignments           = (assignments) => ({ type: SET_ASSIGNMENTS, assignments })
export const setCurrentAssignment     = (assignment) => ({ type: SET_CURRENT_ASSIGNMENT, assignment })
export const setTeacher               = (teacher) => ({ type: SET_TEACHER, teacher })


/* ------------       REDUCERS     ------------------ */

const initialState = {
  assignments: [],
  currentAssignment: {},
  teacher: {}
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

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// Add a new user

export const loadAssignments = () => (dispatch, getState) => {
  let studentId = getState().auth.studentId
  axios.get(`/api/students/${studentId}/assingments`)
    .then(res => res.data)
    .then(assignments => dispatch(setAssignments(assignments)))
    .catch(err => console.error(err))
}

export const loadCurrentAssignment = (assignmentId) => (dispatch, getState) => {
  let studentId = getState().auth.studentId
  axios.get(`/api/students/${studentId}/assingments/${assignmentId}`)
    .then(res => res.data)
    .then(assignment => dispatch(setCurrentAssignment(assignment)))
    .catch(err => console.error(err))
}

export const loadTeacher = () => (dispatch, getState) => {
  let studentId = getState().auth.studentId
  axios.get(`/api/students/${studentId}/`)
    .then(res => res.data)
    .then(student => dispatch(setTeacher(student.teacher)))
    .catch(err => console.error(err))
}
