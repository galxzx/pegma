import axios from 'axios'
import { browserHistory } from 'react-router'

/* -----------------    ACTIONS     ------------------ */

export const TOGGLE_CHATBOX = 'TOGGLE_CHATBOX'

/* ------------   ACTION CREATORS     ------------------ */

export const toggleChatbox = () => ({ type: TOGGLE_CHATBOX })

/* ------------       REDUCERS     ------------------ */

const initialState = {
  open: false
}

export default function reducer(prevState = initialState, action) {
  const newState = Object.assign({}, prevState)
  switch (action.type) {
    case TOGGLE_CHATBOX:
      newState.open = !newState.open
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const handleToggleChatbox = () => (dispatch) => dispatch(toggleChatbox())



