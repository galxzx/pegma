import React from 'react'
import { Link } from 'react-router'

const TeacherStats = () => {

  return (
    <ul className="stats">
      <li className="stats-ready">
        <span className="icon icon-paper-alert"></span>
        <div className="info">
          <div className="quantity">0</div>
          <div className="type">Ready to Grade</div>
        </div>
      </li>
      <li className="stats-selfgraded">
        <span className="icon icon-paper-check"></span>
        <div className="info">
          <div className="quantity">0</div>
          <div className="type">Self Graded</div>
        </div>
      </li>
      <li className="stats-totalassignments">
        <span className="icon icon-files"></span>
        <div className="info">
          <div className="quantity">0</div>
          <div className="type">Total Assignments</div>
        </div>
      </li>
      <li className="stats-totalstudents">
        <span className="icon icon-graduation-cap"></span>
        <div className="info">
          <div className="quantity">0</div>
          <div className="type">Total Students</div>
        </div>
      </li>
    </ul>
   )
}

export default TeacherStats
