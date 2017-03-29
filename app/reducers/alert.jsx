import axios from 'axios'
import { browserHistory } from 'react-router'

/* -----------------    ACTIONS     ------------------ */

export const OPEN_ALERT = 'OPEN_ALERT'
export const CLOSE_ALERT = 'CLOSE_ALERT'
export const SET_ALERT = 'SET_ALERT'

/* ------------   ACTION CREATORS     ------------------ */

export const openAlert = () => ({ type: OPEN_ALERT, isOpen: true })
export const closeAlert = () => ({ type: CLOSE_ALERT, isOpen: false})
export const setAlert = (message) => ({ type: SET_ALERT, message})
/* ------------       REDUCERS     ------------------ */

const initialState = {
  isOpen: false,
  message: 'something you want to know'
}

export default function reducer(prevState = initialState, action) {
  const newState = Object.assign({}, prevState)
  switch (action.type) {

    case SET_ALERT:
      newState.message = action.message
      break

    case OPEN_ALERT:
      newState.isOpen = action.isOpen
      break

    case CLOSE_ALERT:
      newState.isOpen = action.isOpen
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const openAlertDispatch = () => dispatch => dispatch(openAlert())
export const closeAlertDispatch = () => dispatch => dispatch(closeAlert())
export const setAlertDispatch = (message) => dispatch => dispatch(setAlert(message))
