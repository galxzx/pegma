import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {Board} from 'APP/react-trello'


import StudentTracker from '../components/StudentTracker'
import {
  handleDragStart, 
  handleDragEnd, 
  shouldReceiveNewData, 
  handleCardClick, 
  defineSortFunction
} from '../reducers/tracker'

class StudentTrackerContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const studentName = this.props.user.student_id ? 
    this.props.user.firstName + ' ' + this.props.user.lastName :
    this.props.currentStudent.user.firstName + ' ' + this.props.currentStudent.user.lastName

    const teacherView = this.props.user.teacher_id ? true : false

    return (
      <div>
        <div className="container panel-container">
          <section className="flex-child panel">
            <div className="panel-header">{`${studentName}'s Tracker Board`}</div> 
            <div key="StudentTracker">
              <Board 
                data={this.props.board}
                draggable={true}
                handleDragStart={this.props.handleDragStart}
                handleDragEnd={this.props.handleDragEnd}
                onCardClick={this.props.handleCardClick}
                laneSortFunction={this.props.defineSortFunction}
                teacherView={teacherView}
              />
          </div>               
          </section>
        </div>
      </div>
    )
  }
} 

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

export default connect (mapState, mapDispatch) (StudentTrackerContainer)

