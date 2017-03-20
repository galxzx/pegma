import React from 'react'
import { Link } from 'react-router'

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
      totalNew++
      totalToDo++
    }
    else {
      totalToDo++
    }
  })

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
        <span className="icon icon-calendar-plus-o"></span>
        <div className="info">
          <div className="quantity">{ totalNew }</div>
          <div className="type">New</div>
        </div>
      </li>
      <li className="stats-complete">
        <span className="icon icon-calendar-check-o"></span>
        <div className="info">
          <div className="quantity">{ totalCompleted }</div>
          <div className="type">Completed</div>
        </div>
      </li>
      <li className="stats-rewards">
        <span className="icon icon-trophy"></span>
        <div className="info">
          <div className="quantity">{ totalRewards }</div>
          <div className="type">Reward Points</div>
        </div>
      </li>
    </ul>
   )
}

export default StudentStats
