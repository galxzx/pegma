import React from 'react'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ChatboxContainer from '../containers/ChatboxContainer'
import Login from './Login'

const TeacherApp = ({ user, children }) => {
  return (user && user.teacher_id) ? (
    <div className="flex-main">
      <nav className="container nav-content">
        <ul className="nav-bar">
          <Link className="nav-item" to='/teacher/dashboard'>
            <span className="nav-icon icon-dashboard"></span>
            <div className="nav-text">Dashboard</div>
          </Link>
          <Link className="nav-item" to='/teacher/assignments'>
            <span className="nav-icon icon-clipboard"></span>
            <div className="nav-text">Assignments</div>
          </Link>
          <Link className="nav-item" to='/teacher/students'>
            <span className="nav-icon icon-users"></span>
            <div className="nav-text">Students</div>
          </Link>
          <Link className="nav-item" to='/teacher/calendar'>
            <span className="nav-icon icon-calendar"></span>
            <div className="nav-text">Calendar</div>
          </Link>
          <Link className="nav-item" to='/teacher/FAQ'>
            <span className="nav-icon icon-question"></span>
            <div className="nav-text">FAQ</div>
          </Link>
          <Link className="nav-item" to="/teacher/settings">
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
    {user ? <ChatboxContainer /> : ''}
  </div>
  )
  :
  (
  <div className="not-logged">
    <span className="icon icon-error-triangle"></span>
    <h3>You must be logged in as a Teacher to see this page.</h3>
    <Login />
  </div>
  )
}

export default TeacherApp
