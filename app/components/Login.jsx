import React from 'react'
import {Link} from 'react-router'

export const Login = ({ login }) => (
  <div className="modal-login">

    <nav>
    {
      // <button className="btn bg-blue"><span className="icon icon-facebook-square"></span>Facebook</button>
      // <button className="btn bg-green"><span className="icon icon-google-plus-square"></span>Google</button>
    }
      <p style={{margin: '5px', fontSize:'14px'}}>Try out the app as a teacher with user: geoff.bass@example.com password: 1234</p>
      <p style={{margin: '5px', fontSize:'14px'}}>Try out the app as a student with user: cody@example.com password: 1234</p>
    </nav>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" placeholder="e-mail" />
      <input name="password" type="password" placeholder="password" />
      <input className="btn btn-primary" type="submit" value="Login" />
    </form>

    <div className="login-footer">
      <p><Link href="#">Forgot Password?</Link></p>
      <p><Link to="/signup">Create account</Link></p>
    </div>

  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)

