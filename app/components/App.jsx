import React from 'react'
import WhoAmI from './WhoAmI'
import Login from './Login'

const App = ({ user, children }) => {
  return (
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
  )
}


export default App
