import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_STUDENTS  = 'SET_STUDENTS'
export const ADD_ASSIGNMENTS = 'ADD_ASSIGNMENTS'

/* ------------   ACTION CREATORS     ------------------ */

export const setStudents = (students) => ({ type: SET_STUDENTS, students })
export const addAssignments = (assignments) => ({ type: ADD_ASSIGNMENTS, assignments })

/* ------------       REDUCERS     ------------------ */

const initialState = {
  students: []
}

export default function reducer(prevState = initialState, action) {
 
  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case SET_STUDENTS:
      newState.students = action.students
      break

    case ADD_ASSIGNMENTS:
      action.assignments.forEach(assignment =>
        newState.student[assignment.student_id].assignments.push(assignment)
      )
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// Add a new user

export const loadStudents = () => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  axios.get(`/api/teachers/${teacherId}/students`)
    .then(res => res.data)
    .then(students => dispatch(setStudents(students)))
    .catch(err => console.error(err))
}

export const addAssignmentsRequest = (item, students) => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  axios.post(`/api/teachers/${teacherId}/assignments/`, {item: item, students: students})
    .then(res => res.data)
    .then(assignments => {
      console.log('assignments in reducer --->', assignments)
      dispatch(addAssignments(assignments))
    })
    .catch(err => console.error(err))
}