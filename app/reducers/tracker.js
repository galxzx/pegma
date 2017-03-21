import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_BOARD = 'SET_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'

/* ------------   ACTION CREATORS     ------------------ */

export const setBoard = (assignments) => ({ type: SET_BOARD, assignments })
export const updateStatus = (updated) => ({ type: updateBoard, updated })

/* ------------       REDUCERS     ------------------ */

const initialState = {
  board: {
    lanes: [
      {id:'assigned', title: 'assigned', label: 'assigned', cards:[]},
      {id:'doing', title: 'doing', label: 'doing', cards:[]},
      {id:'completed', title: 'completed', label: 'completed', cards:[]},
      {id:'archived', title: 'archived', label: 'archived', cards:[]}
    ]
  }
}

function getIdx(status) {
  if(status === 'assigned') return 0
  if(status === 'doing') return 1
  if(status === 'completed') return 2
  if(status === 'archived') return 3  
}    

export default function reducer(prevState = initialState, action) {
  const newState = Object.assign({}, prevState)
  switch (action.type) {
    case SET_BOARD:
      newState.board.lanes.map(lane => lane.cards = [])
      action.assignments.forEach(assignment => {
        let dueDate = `${assignment.due_date.substring(5,7)}/${assignment.due_date.substring(8,10)}`    
        assignment.label = dueDate
        assignment.id = assignment.id + ''
        newState.board.lanes[getIdx(assignment.status)].cards.push(assignment)
      })
      break
    case UPDATE_BOARD:
      let card = newState.board.lanes[getIdx(action.updated.prevStatus)].cards
        .find((e)=> e.id === action.updated.id)
      newState.board.lanes[getIdx(action.updated.newStatus)].cards.push(card)
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const loadBoard = () => (dispatch, getState) => {
  let studentId = getState().auth.student_id
  axios.get(`/api/students/${studentId}/assignments`)
    .then(res => res.data)
    .then(assignments => dispatch(setBoard(assignments)))
    .catch(err => console.error(err))
}
export const handleDragStart = (cardId, laneId) => (dispatch) => {}

export const shouldReceiveNewData = (nextData) => (dispatch) => {}

export const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => (dispatch) => {
  dispatch(updateStatus({id: cardId, prevStatus: sourceLaneId, newStatus:targetLaneId}))
}

export const handleCardClick = (cardId, metadata) => (dispatch, getState) => {
  // const studentId = getState().auth.student_id
  // console.log(`card ${cardId} was clicked by student id # ${studentId}`)
  browserHistory.push(`/student/assignment/${cardId}`)
}

export const defineSortFunction = (card1, card2) => (dispatch, getState) => {
  return card1.due_date > card2.due_date
}