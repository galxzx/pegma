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

export const loadQuizzes = () => (dispatch, getState) => {
  axios.get(`/api/library/quizzes`)
    .then(res => res.data)
    .then(quizzes => dispatch(setQuizzes(quizzes)))
    .catch(err => console.error(err))
}

export const loadTasks = () => (dispatch, getState) => {
  axios.get(`/api/library/tasks`)
    .then(res => res.data)
    .then(tasks => dispatch(setTasks(tasks)))
    .catch(err => console.error(err))
}