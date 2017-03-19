import React from 'react'
import WhoAmI from './WhoAmI'
import Login from './Login'

import {Link} from 'react-router'

const StudentApp = ({ user, children }) => {
	console.log(user)
	return (user !== null) ? (
    <div>
      <nav className="container nav-content">
        <ul className="nav-bar">
          <li className="nav-item">
            <span className="nav-icon icon-clipboard"></span>
            <Link className="nav-text" to='/student/dashboard'>Dashboard</Link>
          </li>        
          <li className="nav-item">
            <span className="nav-icon icon-clipboard"></span>
            <Link className="nav-text" to='/student/tracker'>Assignments</Link>
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
  : (<div></div>)
}

export default StudentApp
