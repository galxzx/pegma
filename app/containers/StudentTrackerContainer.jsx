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
    board: state.tracker.board,
    currentStudent: state.teacher.currentStudent
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
