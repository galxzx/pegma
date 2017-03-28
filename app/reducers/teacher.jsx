import axios from 'axios'
import { browserHistory } from 'react-router'
import { loadCurrentAssignment } from './student'

/* -----------------    ACTIONS     ------------------ */

export const SET_CALENDAR = 'SET_CALENDAR'
export const SET_STUDENTS  = 'SET_STUDENTS'
export const SET_CURRENT_STUDENT  = 'SET_CURRENT_STUDENT'
export const DROP_STUDENT  = 'DROP_STUDENT'

/* ------------   ACTION CREATORS     ------------------ */

export const setCalendar = (calendar) => ({ type: SET_CALENDAR, calendar })
export const setStudents = (students) => ({ type: SET_STUDENTS, students })
export const setCurrentStudent = (student) => ({ type: SET_CURRENT_STUDENT, student })
export const dropStudent = (studentId) => ({ type: DROP_STUDENT, studentId })

/* ------------       REDUCERS     ------------------ */

const initialState = {
  students: [],
  calendar: {},
  currentStudent: {}
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

    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const loadCalendar = () => (dispatch, getState) => {
  let teacherId = getState().auth.teacher_id
  axios.get(`/api/teachers/${teacherId}`)
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
  axios.post(`/api/teachers/${teacherId}/assignments/`, {item: item, students: students})
    .then(res => res.data)
    .then(students => {
      console.log('returned students', students)
       dispatch(setStudents(students))
    })
    .catch(err => console.error(err))
}

export const updateGrade = (grade, status, assignmentId) => (dispatch) =>
  axios.put(`/api/teachers/assignments/${assignmentId}`, {grade, status})
    .then(res => res.data)
    .then(assignment => dispatch(loadCurrentAssignment(assignment.id)))
  .catch(err => console.error(err))


export const loadCurrentStudent = (studentId) => (dispatch, getState) =>
 axios.get(`/api/students/${studentId}/`)
  .then(res => res.data)
  .then(student => {
    dispatch(setCurrentStudent(student))
  })
  .catch(err => console.error(err))

export const dropStudentRequest = (studentId) => (dispatch) =>
  axios.put(`/api/students/${studentId}/`, {teacher_id: null})
    .then(dropped => dispatch(dropStudent(studentId)))
  .catch(err => console.error(err))

