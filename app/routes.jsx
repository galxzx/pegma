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
import StudentTrackerContainer from './containers/StudentTrackerContainer'
import StudentSettingsContainer from './containers/StudentSettingsContainer'
import StudentCalendarContainer from './containers/StudentCalendarContainer'
import AssignmentContainer from './containers/AssignmentContainer'
import ClassTrackerContainer from './containers/ClassTrackerContainer'
import LibraryContainer from './containers/LibraryContainer'
import TeacherSettingsContainer from './containers/TeacherSettingsContainer'
import TeacherCalendarContainer from './containers/TeacherCalendarContainer'
import QuizContainer from './containers/QuizContainer'
import CompletedQuizContainer from './containers/CompletedQuizContainer'
import TeacherFunctionsContainer from './containers/TeacherFunctionsContainer'
import SignUpContainer from './containers/SignUpContainer'
import CreateQuizContainer from './containers/CreateQuizContainer'


import {whoami} from './reducers/auth'

import {loadAssignments, loadCurrentAssignment, loadStudent, loadQuiz} from './reducers/student'
import {loadStudents} from './reducers/teacher'
import {loadLibrary} from './reducers/library'

import {loadBoard} from './reducers/tracker'
import {loadTeachers} from './reducers/signup'

const onEnterSignup = () => {
  store.dispatch(loadTeachers())
}

const onEnterStudent = (nextState, replace) => (
  store.dispatch(whoami())
    .then(res => store.dispatch(loadStudent()))
)

const onEnterTeacher = (nextState, replace) => (
  store.dispatch(whoami())
    .then(res => store.dispatch(loadStudents()))
)

const onEnterTeacherFunctions = (nextState, replace) => (
  store.dispatch(whoami())
    .then(res => store.dispatch(loadLibrary()))
)

const onEnterQuiz = () => {
  const currentAssignment = store.getState().student.currentAssignment;
  store.dispatch(loadQuiz(currentAssignment.quiz_id))
  if (currentAssignment.type === 'quiz' && currentAssignment.status === 'completed') browserHistory.push(`/student/assignment/${currentAssignment.id}/completedQuiz`)
}

const onEnterAssignment = (nextState) =>  {
  console.log('nextState', nextState)
  store.dispatch(whoami())
  .then(() => {
    return store.dispatch(loadCurrentAssignment(nextState.params.assignmentId))
      .then(currentAssignment => {
        if (currentAssignment.type === 'quiz') browserHistory.push(`/student/assignment/${currentAssignment.id}/quiz/${currentAssignment.quiz_id}`)
    })
  })
    .catch(err => console.error(err))
}

const onEnterStudentTracker = (nextState, replace, done) => {
  onEnterStudent(nextState, replace)
  .then(res => store.dispatch(loadBoard()))
  .then(done())
}


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="/signup" component={SignUpContainer} onEnter={onEnterSignup} />
          <IndexRedirect to="/signup" />
          <Router path="/student"  component={StudentAppContainer} onEnter={onEnterStudent}>
            <Route path="dashboard" component={StudentDashboardContainer} onEnter={onEnterStudent}/>
            <Route path="tracker" component={StudentTrackerContainer} onEnter={onEnterStudentTracker}/>
            <Route path="settings" component={StudentSettingsContainer} />
            <Route path="calendar" component={StudentCalendarContainer} />
            <Router path="assignment/:assignmentId" component={AssignmentContainer} onEnter={onEnterAssignment} >
              <Route path="quiz/:quizId" component={QuizContainer} onEnter={onEnterQuiz} />
              <Route path="completedQuiz" component={CompletedQuizContainer} />
            </Router>
            <IndexRedirect to="dashboard" />
          </Router>
          <Router path="/teacher" component={TeacherAppContainer} onEnter={onEnterTeacher}>
            <Route path="dashboard" component={TeacherDashboardContainer} />
            <Route path="assignments" component={TeacherFunctionsContainer} onEnter={onEnterTeacherFunctions} />
            <Route path="student/:studentId" component={StudentTrackerContainer} />
            <Route path="library" component={LibraryContainer} />
            <Route path="settings" component={TeacherSettingsContainer} />
            <Route path="calendar" component={TeacherCalendarContainer} />
            <Route path="createquiz" component={CreateQuizContainer} />
            <IndexRedirect to="dashboard" />
          </Router>
        </Route>
      </Router>
    </Provider>
  )
}
