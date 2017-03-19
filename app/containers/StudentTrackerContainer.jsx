import {connect} from 'react-redux'

import StudentTracker from '../components/StudentTracker'

import {updateAssignmentRequest} from '../reducers/student'


const handleDragStart = (cardId, laneId) => (dispatch) => {
  console.log('drag started')
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => (dispatch) => {
  dispatch(updateAssignmentRequest({id: cardId, status:targetLaneId}))
}

const shouldReceiveNewData = (nextData) => (dispatch)=> {
  console.log('data has changed')
  console.log(nextData)
}

function getIdx(status) {
  if(status === 'assigned') return 0
  if(status === 'doing') return 1
  if(status === 'completed') return 2
  if(status === 'archive') return 3  
}    

const arrangeBoard = (assignments) => {
	let board = {
    lanes: [
      {id:'assigned', title: 'assigned', label: 'assigned', cards:[]},
      {id:'doing', title: 'doing', label: 'doing', cards:[]},
      {id:'complete', title: 'complete', label: 'complete', cards:[]},
      {id:'archive', title: 'archive', label: 'archive', cards:[]}
    ]
  }
	assignments.forEach(assignment => {
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

const mapDispatch = {handleDragStart, handleDragEnd, shouldReceiveNewData}

export default connect (mapState, mapDispatch) (StudentTracker)
