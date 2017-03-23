import React from 'react'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Login from './Login'

const StudentApp = ({ user, children }) => {
	return (user && user.student_id) ? (
    <div className="flex-main">
      <nav className="container nav-content">
        <ul className="nav-bar">
          <Link className="nav-item" to='/student/dashboard'>
            <span className="nav-icon icon-list-alt"></span>
            <div className="nav-text">Dashboard</div>
          </Link>        
          <Link className="nav-item" to='/student/tracker'>
            <span className="nav-icon icon-clipboard"></span>
            <div className="nav-text">Assignments</div>
          </Link>
          <Link className="nav-item" to='/student/calendar'>
            <span className="nav-icon icon-calendar"></span>
            <div className="nav-text">Calendar</div>
          </Link>
          <Link className="nav-item" to='/student/reportcard'>
            <span className="nav-icon icon-report-card"></span>
            <div className="nav-text">Report Card</div>
          </Link>
          <Link className="nav-item" to='/student/settings'>
            <span className="nav-icon icon-cog"></span>
            <div className="nav-text">Settings</div>
          </Link>
        </ul>
      </nav>   
      <ReactCSSTransitionGroup
          transitionName="app"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
          transitionAppear={true}
          transitionAppearTimeout={200}>
          {
          React.cloneElement(children, {key: window.location.pathname})
          }          
      </ReactCSSTransitionGroup>         
    </div>
  )
  : 
  (
    <div className="not-logged">
      <span className="icon icon-exclamation-triangle"></span>
      <h3>You must be logged in as a Student to see this page.</h3>
      <Login />
    </div>
  )
}

export default StudentApp
