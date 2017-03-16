import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_STUDENTS  = 'SET_STUDENTS'



/* ------------   ACTION CREATORS     ------------------ */

export const setStudents   = (students) => ({ type: SET_STUDENTS, students })


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

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// Add a new user

export const loadStudents = () => (dispatch, getState) => {
  let teacherId = getState().auth.teacherId
  axios.get(`/api/teacher/${teacherId}/students`)
    .then(res => res.data)
    .then(students => dispatch(setStudents(students))
    .catch(err => console.error(err))
}

