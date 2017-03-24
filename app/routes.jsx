'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'


import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import AppContainer from './containers/AppContainer'
import HomeContainer from './containers/HomeContainer'
import StudentAppContainer from './containers/StudentAppContainer'
import TeacherAppContainer from './containers/TeacherAppContainer'
import StudentDashboardContainer from './containers/StudentDashboardContainer'
import TeacherDashboardContainer from './containers/TeacherDashboardContainer'
import StudentTrackerContainer from './containers/StudentTrackerContainer'
import StudentSettingsContainer from './containers/StudentSettingsContainer'
import StudentCalendarContainer from './containers/StudentCalendarContainer'
import StudentReportCardContainer from './containers/StudentReportCardContainer'
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
import CompletedAssignmentContainer from './containers/CompletedAssignmentContainer'
import TeacherStudentsContainer from './containers/TeacherStudentsContainer'


import {whoami} from './reducers/auth'

import {loadAssignments, loadCurrentAssignment, loadStudent, loadQuiz, loadTask} from './reducers/student'
import {loadStudents, loadCurrentStudent} from './reducers/teacher'
import {loadLibrary} from './reducers/library'

import {loadBoard} from './reducers/tracker'
import {loadTeachers} from './reducers/signup'

const onEnterSignup = () => {
  store.dispatch(loadTeachers())
}

const onEnterStudent = (nextState, replace, callback) => (
  store.dispatch(whoami())
    .then(user => {
      if(user.teacher_id && nextState.params && nextState.params.assignmentId) return replace (`/teacher/assignment/${nextState.params.assignmentId}`)
      return store.dispatch(loadStudent())
    })
    .then(res => callback())

    .catch(err => console.error(err))
)

const onEnterTeacher = (nextState, replace, done) => (
  store.dispatch(whoami())
    .then(res => store.dispatch(loadStudents()))
    .then(res => done())
    .catch(err => console.error(err))
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

const onEnterAssignment = (nextState, replace, done) => {
// <!--   return store.dispatch(loadCurrentAssignment(nextState.params.assignmentId))
//     .then(assignment => {
//       if(assignment.type === 'quiz') return store.dispatch(loadQuiz(assignment.quiz_id))
//           .then(() => done())
//       else if (assignment.type === 'task') return store.dispatch(loadTask(assignment.task_id))
//           .then(() => done())
//       return done()
//     }) -->
  store.dispatch(whoami())
    .then(res => {
      const user = store.getState().auth
       if(user.teacher_id) return replace(`/teacher/assignment/${nextState.params.assignmentId}`)
      return store.dispatch(loadCurrentAssignment(nextState.params.assignmentId))
        .then(assignment => {
          if(assignment.status === 'completed' || assignment.status === 'archived'){
            replace(`/student/completed/${assignment.id}`)
          }
          if(assignment.type === 'quiz') return store.dispatch(loadQuiz(assignment.quiz_id))
              .then(() => done())
          else if (assignment.type === 'task') return store.dispatch(loadTask(assignment.task_id))
              .then(() => done())
          return done()
        })
      })
    .catch(err => console.error(err))
}



const onEntercompAssign = (nextState, replace, done) => {
  store.dispatch(whoami())
  .then(() =>
    store.dispatch(loadCurrentAssignment(nextState.params.assignmentId)))
  .then((currentAssignment) => {
    if(currentAssignment.type === 'quiz') {return store.dispatch(loadQuiz(currentAssignment.quiz_id))
        .then(() => done())
      }
    else if (currentAssignment.type === 'task') return store.dispatch(loadTask(currentAssignment.task_id))
        .then(() => done())
  })
  .catch(err => console.error(err))
}

const onEnterStudentTracker = (nextState, replace, done) => {
  onEnterStudent(nextState, replace)
  .then(res => store.dispatch(loadBoard()))
  .then(done)
}

const onEnterTeacherTracker = (nextState, replace, done) => {
  store.dispatch(loadCurrentStudent(nextState.params.studentId))
  .then(res => store.dispatch(loadBoard()))
  .then(done)
  .catch(err => console.error(err))
}

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="/home" component={HomeContainer} />
          <IndexRedirect to="/home" />
          <Route path="/signup" component={SignUpContainer} onEnter={onEnterSignup} />
          <Router path="/student"  component={StudentAppContainer} onEnter={onEnterStudent}>
            <Route path="dashboard" component={StudentDashboardContainer} />
            <Route path="tracker" component={StudentTrackerContainer} onEnter={onEnterStudentTracker}/>
            <Route path="reportcard" component={StudentReportCardContainer} />
            <Route path="settings" component={StudentSettingsContainer} />
            <Route path="calendar" component={StudentCalendarContainer} />
            <Route path="assignment/:assignmentId" component={AssignmentContainer} onEnter={onEnterAssignment} />
            <Route path="completed/:assignmentId" component={CompletedAssignmentContainer} onEnter={onEntercompAssign} />

            <IndexRedirect to="dashboard" />
          </Router>
          <Router path="/teacher" component={TeacherAppContainer} onEnter={onEnterTeacher}>
            <Route path="dashboard" component={TeacherDashboardContainer} onEnter={onEnterTeacher} />
            <Route path="assignments" component={TeacherFunctionsContainer} onEnter={onEnterTeacherFunctions} />
            <Route path="students" component={TeacherStudentsContainer} onEnter={onEnterTeacher} />
            <Route path="student/:studentId" component={StudentTrackerContainer} onEnter={onEnterTeacherTracker} />
            <Route path="library" component={LibraryContainer} onEnter={onEnterTeacher} />
            <Route path="settings" component={TeacherSettingsContainer} onEnter={onEnterTeacher} />
            <Route path="calendar" component={TeacherCalendarContainer} />
            <Route path="createquiz" component={CreateQuizContainer} />
            <Route path="assignment/:assignmentId" component={CompletedAssignmentContainer} onEnter={onEntercompAssign} />
            <IndexRedirect to="dashboard" />
          </Router>
        </Route>
      </Router>
    </Provider>
  )
}
