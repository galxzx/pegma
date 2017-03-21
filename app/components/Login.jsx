import React from 'react'
import {Link} from 'react-router'

export const Login = ({ login }) => (
  <div className="modal-login">

    <nav>
      <button className="btn bg-blue"><span className="icon icon-facebook-square"></span>Facebook</button>
      <button className="btn bg-green"><span className="icon icon-google-plus-square"></span>Google</button>
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
      <p><Link href="#">Create account</Link></p>
    </div>

  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)

