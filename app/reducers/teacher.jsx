import axios from 'axios'
import { browserHistory } from 'react-router'
import { loadCurrentAssignment } from './student'
import { setAlert, openAlert } from './alert'

/* -----------------    ACTIONS     ------------------ */

export const SET_CALENDAR = 'SET_CALENDAR'
export const SET_STUDENTS  = 'SET_STUDENTS'
export const SET_CURRENT_STUDENT  = 'SET_CURRENT_STUDENT'
export const DROP_STUDENT  = 'DROP_STUDENT'
export const SET_UNCLAIMED_STUDENTS = 'UNCLAIMED_STUDENTS'
export const UPDATE_UNCLAIMED_STUDENTS = 'UPDATE_UNCLAIMED_STUDENTS'

/* ------------   ACTION CREATORS     ------------------ */

export const setCalendar = (calendar) => ({ type: SET_CALENDAR, calendar })
export const setStudents = (students) => ({ type: SET_STUDENTS, students })
export const setCurrentStudent = (student) => ({ type: SET_CURRENT_STUDENT, student })
export const dropStudent = (studentId) => ({ type: DROP_STUDENT, studentId })
export const setUnclaimedStudents = (unclaimedStudents) => ({ type: SET_UNCLAIMED_STUDENTS, unclaimedStudents })
export const updateUnclaimedStudents = (studentId) => ({ type: UPDATE_UNCLAIMED_STUDENTS, studentId })

/* ------------       REDUCERS     ------------------ */

const initialState = {
  students: [],
  calendar: {},
  currentStudent: {},
  unclaimedStudents: []
}

export default function reducer(prevState = initialState, action) {

  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case SET_CALENDAR:
      newState.calendar = action.calendar
      break

    case SET_STUDENTS:
      newState.students = action.students
      break

    case SET_CURRENT_STUDENT:
      newState.currentStudent = action.student
      break

    case DROP_STUDENT:
      newState.students = newState.students.filter(student => student.id !== action.studentId)
      break

    case SET_UNCLAIMED_STUDENTS:
      newState.unclaimedStudents = action.unclaimedStudents
      break

    case UPDATE_UNCLAIMED_STUDENTS:
      newState.unclaimedStudents = newState.unclaimedStudents.filter(student => student.id !== action.studentId)
      break

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const loadCalendar = () => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  return axios.get(`/api/teachers/${teacherId}`)
    .then(res => res.data)
    .then(teacher => dispatch(setCalendar(teacher.calendar)))
    .catch(err => console.error(err))
}

export const updateCalendar = () => (dispatch, getState) => {
    const state = getState()
    const teacherId = state.auth.teacher_id
    const email = state.form.calendar.values.email
    email.replace('@', '%40')
    const newInfo = { calendar: `https://calendar.google.com/calendar/embed?src=${email}`}
    return axios.put(`/api/teachers/${teacherId}`, newInfo)
      .then(res => res.data)
      .then(res => dispatch(setCalendar(res.calendar)))
      .catch(err => console.error(err))
}

export const loadStudents = () => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  return axios.get(`/api/teachers/${teacherId}/students`)
    .then(res => res.data)
    .then(students => dispatch(setStudents(students)))
    .catch(err => console.error(err))
}

export const addAssignmentsRequest = (item, students) => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  return axios.post(`/api/teachers/${teacherId}/assignments/`, {item: item, students: students})
    .then(res => res.data)
    .then(students => {
       dispatch(setStudents(students))
       dispatch(setAlert(`Added assignment ${item.title}`))
       dispatch(openAlert())
    })
    .catch(err => console.error(err))
}

export const updateGrade = (grade, status, assignmentId) => (dispatch) =>
  axios.put(`/api/teachers/assignments/${assignmentId}`, {grade, status})
    .then(res => res.data)
    .then(assignment => dispatch(loadCurrentAssignment(assignment.id)))
    .then(() => {
      dispatch(setAlert(`Set status to ${status} and grade to ${grade}`))
      dispatch(openAlert())
    })
  .catch(err => console.error(err))

export const loadCurrentStudent = (studentId) => (dispatch) =>
 axios.get(`/api/students/${studentId}/`)
  .then(res => res.data)
  .then(student => dispatch(setCurrentStudent(student)))
  .catch(err => console.error(err))

export const dropStudentRequest = (student) => (dispatch) =>
  axios.put(`/api/students/${student.id}/`, {teacher_id: null})
    .then(dropped => {
      dispatch(dropStudent(student.id))
      dispatch(setAlert(`Dropped student: ${student.user.firstName} ${student.user.lastName}`))
      dispatch(openAlert())
    })
  .catch(err => console.error(err))

export const loadUnclaimedStudents = () => (dispatch) =>
  axios.get(`/api/students/claim`)
    .then(res => res.data)
    .then(students => dispatch(setUnclaimedStudents(students)))
    .catch(err => console.error(err))

export const claimStudentRequest = (studentId) => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  return axios.put(`/api/students/claim/${studentId}`, {teacherId: teacherId})
    .then(res => res.data)
    .then(claimed => dispatch(updateUnclaimedStudents(studentId)))
  .catch(err => console.error(err))
}
