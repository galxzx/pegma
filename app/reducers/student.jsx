import axios from 'axios'
import { browserHistory } from 'react-router'


/* -----------------    ACTIONS     ------------------ */

export const SET_ASSIGNMENTS          = 'SET_ASSIGNMENTS'
export const SET_CURRENT_ASSIGNMENT   = 'SET_CURRENT_ASSIGNMENT'
export const SET_TEACHER              = 'SET_TEACHER'

export const UPDATE_ASSIGNMENT        = 'UPDATE_ASSIGNMENT'

// for tracker board
// export const MOVE_CARD                = 'MOVE_CARD';
// export const TOGGLE_DRAGGING          = 'TOGGLE_DRAGGING';

/* ------------   ACTION CREATORS     ------------------ */

export const setAssignments           = (assignments) => ({ type: SET_ASSIGNMENTS, assignments })
export const setCurrentAssignment     = (assignment) => ({ type: SET_CURRENT_ASSIGNMENT, assignment })
export const setTeacher               = (teacher) => ({ type: SET_TEACHER, teacher })

export const updateAssignment         = (assignment) => ({ type: UPDATE_ASSIGNMENT, assignment })

// for tracker board


/* ------------       REDUCERS     ------------------ */

const initialState = {
  assignments: [],
  currentAssignment: {},
  teacher: {},
  board: {
    lanes: [
      {id:'assigned', title: 'assigned', label: 'assigned', cards:[]},
      {id:'doing', title: 'doing', label: 'doing', cards:[]},
      {id:'complete', title: 'complete', label: 'complete', cards:[]},
      {id:'archive', title: 'archive', label: 'archive', cards:[]}
    ]
  }
}

function getIdx(status) {
  if(status === 'assigned') return 0
  if(status === 'doing') return 1
  if(status === 'completed') return 2
  if(status === 'archive') return 3  
}    

export default function reducer(prevState = initialState, action) {
 
  const newState = Object.assign({}, prevState)

  switch (action.type) {

    case SET_ASSIGNMENTS:

      newState.assignments = action.assignments
      newState.assignments.forEach(assignment => {
        newState.board.lanes[getIdx(assignment.status)].cards.push(assignment)
      })

      break

    case SET_CURRENT_ASSIGNMENT:
      newState.currentAssignment = action.assignment
      break

    case UPDATE_ASSIGNMENT:
      newState.assignments.map(assignment => {
        if(assignment.id === action.assignment.id) {
          return Object.assign(assignment, action.assignment)
        }
        return assignment
      })
      break      

    case SET_TEACHER:
      newState.teacher = action.teacher
      break


    default:
      return prevState
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const loadAssignments = () => (dispatch, getState) => {
  let studentId = getState().auth.student_id
  axios.get(`/api/students/${studentId}/assignments`)
    .then(res => res.data)
    .then(assignments => dispatch(setAssignments(assignments)))
    .catch(err => console.error(err))
}

export const loadCurrentAssignment = (assignmentId) => (dispatch, getState) => {
  let studentId = getState().auth.student_id
  axios.get(`/api/students/${studentId}/assignments/${assignmentId}`)
    .then(res => res.data)
    .then(assignment => dispatch(setCurrentAssignment(assignment)))
    .catch(err => console.error(err))
}

export const loadStudent = () => (dispatch, getState) => {
  let studentId = getState().auth.student_id

  axios.get(`/api/students/${studentId}/`)
    .then(res => res.data)
    .then(student => {
      dispatch(setAssignments(student.assignments))      
      dispatch(setTeacher(student.teacher))
    })
    .catch(err => console.error(err))
}

export const updateAssignmentRequest = (assignment) => (dispatch, getState) => {
  let studentId = getState().auth.student_id
  axios.post(`/api/students/${studentId}/assignments/${assignment.id}`, assignment)
    .then(res => res.data)
    .then(assignment => dispatch(updateAssignment(assignment)))
    .catch(err => console.error(err))
}

// for tracker board
// export const moveCard = (prevStatus, prevPosition, nextStatus, nextPosition) => (dispatch) => {
//   let studentId = getState().auth.student_id
//   axios.post(`/api/students/${studentId}/assingments/${assignmentId}`, 
//     {status: nextStatus, position: nextPosition})
//     .then(res => res.data)
//     .then(assignment => dispatch(moveCard(prevStatus, prevPosition, nextStatus, nextPosition)))
//     .catch(err => console.error(err))
// }

// export const toggleDragging = (isDragging) => (dispatch) => {
//   dispatch({ type: TOGGLE_DRAGGING, isDragging })
// }
