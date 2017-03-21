import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import StudentTracker from '../components/StudentTracker'
import {
  handleDragStart, 
  handleDragEnd, 
  shouldReceiveNewData, 
  handleCardClick, 
  defineSortFunction
} from '../reducers/tracker'

const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments,
    board: state.tracker.board
  }
}

const mapDispatch = {
  handleDragStart, 
  handleDragEnd, 
  shouldReceiveNewData, 
  handleCardClick, 
  defineSortFunction
}

export default connect (mapState, mapDispatch) (StudentTracker)
