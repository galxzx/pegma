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


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRedirect to="/jokes" />
          <Route path="/jokes" component={Jokes} />
        </Route>
      </Router>
    </Provider>
  )
}
