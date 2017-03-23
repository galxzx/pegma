import React from 'react'
import WhoAmI from './WhoAmI'

const App = ({ user, children }) => {
  return (
	  <div id="app">
	    <header className="top-menu">
	      <div className="container header-content">
	        <div className="logo">Pegma</div>
	        <div className="user-information">{user ? <WhoAmI/> : null}</div>
	      </div>
	    </header>    

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
