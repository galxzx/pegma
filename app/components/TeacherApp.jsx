import React from 'react'
import {Link} from 'react-router'

import Login from './Login'

const TeacherApp = ({ user, children }) => {
  return (user && user.teacher_id) ? (
    <div>
      <nav className="container nav-content">
        <ul className="nav-bar">
          <Link className="nav-item" to='/teacher/dashboard'>
            <span className="nav-icon icon-list-alt"></span>
            <div className="nav-text">Dashboard</div>
          </Link> 
          <Link className="nav-item" to='/teacher/tracker'>
            <span className="nav-icon icon-clipboard"></span>
            <div className="nav-text">Assignments</div>
          </Link>       
          <Link className="nav-item" to='/teacher/students'>
            <span className="nav-icon icon-users"></span>
            <div className="nav-text">Students</div>
          </Link>
          <Link className="nav-item" to='/teacher/rewards'>
            <span className="nav-icon icon-trophy"></span>
            <div className="nav-text">Rewards</div>
          </Link>
          <Link className="nav-item" to='/teacher/calendar'>
            <span className="nav-icon icon-calendar"></span>
            <div className="nav-text">Calendar</div>
          </Link>
          <Link className="nav-item" to="/teacher/calendar">
            <span className="nav-icon icon-cog"></span>
            <div className="nav-text">Settings</div>
          </Link>
        </ul>
      </nav>      
      {children}
    </div>
  )
  : 
  (
    <div className="not-logged">
      <span className="icon icon-exclamation-triangle"></span>
      <h3>You must be logged in as a Teacher to see this page.</h3>
      <Login />
    </div>
  )
}

export default TeacherApp
