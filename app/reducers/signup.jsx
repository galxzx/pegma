import axios from 'axios'
import { browserHistory } from 'react-router'
import { login } from './auth'


/* -----------------    ACTIONS     ------------------ */

export const SET_TEACHERS  = 'SET_TEACHERS'



/* ------------   ACTION CREATORS     ------------------ */

export const setTeachers   = (teachers) => ({ type: SET_TEACHERS, teachers })


/* ------------       REDUCERS     ------------------ */

const initialState = {
  teachers: []
}

export default function reducer(prevState = initialState, action) {

  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case SET_TEACHERS:
      newState.teachers = action.teachers
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// Add a new user

export const loadTeachers = () =>
dispatch =>
  axios.get('/api/teachers')
    .then(res => res.data)
    .then(teachers => dispatch(setTeachers(teachers)))
    .catch(err => console.error(err))

export const createAccount = () =>
  (dispatch, getState) => {
    const newUser = getState().form.signup.values
    if (newUser.type === 'student') dispatch(createStudent(newUser))
    if (newUser.type === 'teacher') dispatch(createTeacher(newUser))
  }

export const createStudent = (newUser) =>
  dispatch =>
    axios.post('/api/users/student', newUser)
      .then(() => dispatch(login(newUser.email, newUser.password)))
      .then(() => browserHistory.push('/student/dashboard'))
      .catch(err => console.error(err))

export const createTeacher = (newUser) =>
  dispatch =>
    axios.post('/api/users/teacher', newUser)
      .then(() => dispatch(login(newUser.email, newUser.password)))
      .then(() => browserHistory.push('/teacher/dashboard'))
      .catch(err => console.error(err))
