import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import StudentTracker from '../components/StudentTracker'
import {updateAssignmentRequest} from '../reducers/student'


const handleDragStart = (cardId, laneId) => (dispatch) => {
  console.log('drag started')
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => (dispatch) => {
  dispatch(updateAssignmentRequest({id: cardId, status:targetLaneId}))
}

const shouldReceiveNewData = (nextData) => (dispatch) => {
  console.log('data has changed')
  console.log(nextData)
}

const handleCardClick = (cardId, metadata) => (dispatch, getState) => {
  const studentId = getState().auth.student_id
  console.log(`card ${cardId} was clicked by student id # ${studentId}`)
  browserHistory.push(`/student/assignment/${cardId}`)
}

const defineSortFunction = (card1, card2) => (dispatch, getState) => {
  return card1.due_date > card2.due_date
}

defineSortFunction

function getIdx(status) {
  if(status === 'assigned') return 0
  if(status === 'doing') return 1
  if(status === 'completed') return 2
  if(status === 'archived') return 3  
}    

const arrangeBoard = (assignments) => {
	let board = {
    lanes: [
      {id:'assigned', title: 'assigned', label: 'assigned', cards:[]},
      {id:'doing', title: 'doing', label: 'doing', cards:[]},
      {id:'completed', title: 'completed', label: 'completed', cards:[]},
      {id:'archived', title: 'archived', label: 'archived', cards:[]}
    ]
  }
	assignments.forEach(assignment => {
    let dueDate = `${assignment.due_date.substring(5,7)}/${assignment.due_date.substring(8,10)}`    
    console.log('due date---->', dueDate)
    assignment.label = dueDate
    board.lanes[getIdx(assignment.status)].cards.push(assignment)
	})
	return board
}

const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments,
    board: arrangeBoard(state.student.assignments)
  }
}

const mapDispatch = {handleDragStart, handleDragEnd, shouldReceiveNewData, handleCardClick, defineSortFunction}

export default connect (mapState, mapDispatch) (StudentTracker)
