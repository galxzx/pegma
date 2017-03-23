import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    Welcome, <span className="whoami-user-name">{user && user.firstName + ' ' + user.lastName}</span>  <a onClick={logout} className="icon icon-sign-out"></a>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
