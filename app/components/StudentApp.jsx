import React from 'react'
import WhoAmI from './WhoAmI'
import Login from './Login'

const StudentApp = ({ user, children }) => {
  return (
    <div>
      <nav className="container nav-content">
        <ul className="nav-bar">
          <li className="nav-item">
            <span className="nav-icon icon-clipboard"></span>
            <a className="nav-text" href="student-tracker.html">Assignments</a>
          </li>
          <li className="nav-item">
            <span className="nav-icon icon-calendar"></span>
            <a className="nav-text" href="student-calendar.html">Calendar</a>
          </li>
          <li className="nav-item">
            <span className="nav-icon icon-cog"></span>
            <a className="nav-text" href="student-settings.html">Settings</a>
          </li>
        </ul>
      </nav>      
      {children}
    </div>
  )
}

export default StudentApp
