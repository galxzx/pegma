import React from 'react'
import { Link } from 'react-router'

const TeacherStats = () => {

  return (
    <ul className="stats">
      <li className="stats-ready">
        <span className="icon icon-file-text"></span>
        <div className="info">
          <div className="quantity">14</div>
          <div className="type">Ready to Grade</div>
        </div>
      </li>
      <li className="stats-selfgraded">
        <span className="icon icon-calendar-plus-o"></span>
        <div className="info">
          <div className="quantity">24</div>
          <div className="type">Self Graded</div>
        </div>
      </li>
    </ul>
  )
}

export default TeacherStats
