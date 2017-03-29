import React from 'react'
import { Link } from 'react-router'

import WhoAmI from './WhoAmI'
import AlertModalContainer from '../containers/AlertModalContainer'

const App = ({ user, children, teacher}) => {
  return (
    <div id="app">
      <header className="top-menu">
        <div className="container header-content">
          <Link to="/home" className="logo">
            <img src="/images/pegma-logo-horizontal.svg" alt="Pegma"/> {(user && user.student_id && teacher.user) ? (
              <span>
              | <span className="classroom">{`${teacher.user.firstName} ${teacher.user.lastName}'s Classroom`}</span>
              </span>) : <span></span>
            }
          </Link>
          <div className="user-information">{user ? <WhoAmI/> : null}</div>
        </div>
      </header>
      <AlertModalContainer />

      {children}



      <footer>
        <div className="container footer-content">
          <p>© Pegma 2017</p>
        </div>
      </footer>
    </div>
  )
}

export default App
