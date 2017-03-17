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
import StudentAppContainer from './containers/StudentAppContainer'
import TeacherAppContainer from './containers/TeacherAppContainer'
import StudentDashboardContainer from './containers/StudentDashboardContainer'
import TeacherDashboardContainer from './containers/TeacherDashboardContainer'
import TrackerContainer from './containers/TrackerContainer'
import StudentSettingsContainer from './containers/StudentSettingsContainer'
import StudentCalendarContainer from './containers/StudentCalendarContainer'
import AssignmentContainer from './containers/AssignmentContainer'
import ClassTrackerContainer from './containers/ClassTrackerContainer'
import LibraryContainer from './containers/LibraryContainer'
import TeacherSettingsContainer from './containers/TeacherSettingsContainer'
import TeacherCalendarContainer from './containers/TeacherCalendarContainer'
import QuizContainer from './containers/QuizContainer'


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRedirect to="/student" />
          <Router path="/student"  component={StudentAppContainer}>
            <Route path="dashboard" component={StudentDashboardContainer} />
            <Route path="tracker/:studentId" component={TrackerContainer} />
            <Route path="settings" component={StudentSettingsContainer} />
            <Route path="calendar" component={StudentCalendarContainer} />
            <Router path="assignment/:assignmentId" component={AssignmentContainer} >
              <Route path="quiz/:quizId" component={QuizContainer} />
            </Router>
            <IndexRedirect to="dashboard" />
          </Router>
          <Router path="/teacher" component={TeacherAppContainer}>
            <Route path="dashboard" component={TeacherDashboardContainer} />
            <Route path="class" component={ClassTrackerContainer} />
            <Route path="student/:studentId" component={TrackerContainer} />
            <Route path="library" component={LibraryContainer} />
            <Route path="settings" component={TeacherSettingsContainer} />
            <Route path="calendar" component={TeacherCalendarContainer} />
            <IndexRedirect to="dashboard" />
          </Router>
        </Route>
      </Router>
    </Provider>
  )
}
