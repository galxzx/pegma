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

const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments,
    board: state.student.board
  }
}

const mapDispatch = {handleDragStart, handleDragEnd, shouldReceiveNewData}

export default connect (mapState, mapDispatch) (StudentTracker)
