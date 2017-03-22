import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_STUDENTS  = 'SET_STUDENTS'
export const ADD_ASSIGNMENT = 'ADD_ASSIGNMENT'

/* ------------   ACTION CREATORS     ------------------ */

export const setStudents = (students) => ({ type: SET_STUDENTS, students })
export const addAssignment = (assignment) => ({ type: ADD_ASSIGNMENT, assignment })

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

    case ADD_ASSIGNMENT:
      newState.students.map(student =>
        student.assignments = [...student.assignments, action.assignment]
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

export const addAssignmentRequest = (item, students) => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  axios.post(`/api/teachers/${teacherId}/assignments/`, {item: item, students: students})
    .then(res => res.data)
    .then(assignments => {
      console.log('assignment-======', assignment)
      dispatch(addAssignment(assignments))
    })
    .catch(err => console.error(err))
}