import React from 'react'
import { Link } from 'react-router'

import {GPA, getGrades} from '../../utils'

const StudentStats = ({assignments}) => {
  let totalToDo = 0
  let totalNew = 0
  let totalCompleted = 0
  let totalRewards = 0

  // Group totals
  assignments.forEach(assignment => {
    if (assignment.status === 'completed') {
      totalCompleted++
    }
    else if (assignment.status === 'archived') {
      totalRewards += assignment.reward
    }
    else if (assignment.status === 'assigned') {
      totalToDo++
      if (assignment.isNew) totalNew++
    }
    else {
      totalToDo++
    }
  })

  const grade = GPA(getGrades(assignments))

  return (
    <ul className="stats">
      <li className="stats-incomplete">
        <span className="icon icon-file-text"></span>
        <div className="info">
          <div className="quantity">{ totalToDo }</div>
          <div className="type">To-Do</div>
        </div>
      </li>
      <li className="stats-new">
        <span className="icon icon-calendar-plus"></span>
        <div className="info">
          <div className="quantity">{ totalNew }</div>
          <div className="type">New</div>
        </div>
      </li>
      <li className="stats-complete">
        <span className="icon icon-calendar-check"></span>
        <div className="info">
          <div className="quantity">{ totalCompleted }</div>
          <div className="type">Completed</div>
        </div>
      </li>
      <li className="stats-rewards">
        <span className="icon icon-trophy"></span>
        <div className="info">
          <div className="quantity">{ Math.round(grade) }</div>
          <div className="type">Grade Average</div>
        </div>
      </li>
    </ul>
   )
}

export default StudentStats
