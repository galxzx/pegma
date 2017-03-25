import React from 'react'
import { Link } from 'react-router'

import WhoAmI from './WhoAmI'
import ChatboxContainer from '../containers/ChatboxContainer'

const App = ({ user, children }) => {
  return (
	  <div id="app">
	    <header className="top-menu">
	      <div className="container header-content">
	        <Link to="/home" className="logo">Pegma</Link>
	        <div className="user-information">{user ? <WhoAmI/> : null}</div>
	      </div>
	    </header>

      {children}

      {false ? <ChatboxContainer /> : ''}

	    <footer>
	      <div className="container footer-content">
	        <p>© Pegma 2017</p>
	      </div>
	    </footer>
	  </div>
  )
}

export default App
