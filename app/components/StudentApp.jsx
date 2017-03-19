import React from 'react'
import WhoAmI from './WhoAmI'
import Login from './Login'

import {Link} from 'react-router'

const StudentApp = ({ user, children }) => {
	return (user !== null) ? (
    <div>
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
          <Link className="nav-item">
            <span className="nav-icon icon-cog"></span>
            <div className="nav-text">Settings</div>
          </Link>
        </ul>
      </nav>      
      {children}
    </div>
  )
  : (<div></div>)
}

export default StudentApp
