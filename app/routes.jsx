'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import Jokes from './components/Jokes'
import AppContainer from './containers/AppContainer'
import StudentDashboardContainer from './containers/StudentDashboardContainer'


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRedirect to="/student" />
          <Route path="/student" component={StudentDashboardContainer} />
        </Route>
      </Router>
    </Provider>
  )
}
