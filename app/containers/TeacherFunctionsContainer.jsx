import {connect} from 'react-redux'
import React, {Component} from 'react'
import moment from 'moment'
import TeacherFunctions from '../components/TeacherFunctions'
import {addAssignmentsRequest} from '../reducers/teacher'

class TeacherFunctionsContainer extends Component {
  constructor () {
    super()
    this.state = {
      due_date: moment(),
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    window.scrollTo(0,0)
  }

  componentWillUpdate(){
    window.scrollTo(0,0)

  }

  handleSubmit (evt) {

    evt.preventDefault()

    let tasks = document.getElementById('tasks')
    let taskIdx = tasks.selectedIndex || 0

    let quizzes = document.getElementById('quizzes')
    let quizIdx = quizzes.selectedIndex || 0

    let studentIds = document.querySelectorAll(`#students tr.student td.select input[type="checkbox"]:checked`)
    studentIds = [...studentIds].map(input => {
      return +input.value
    })

    let numCreated = 0
    let numStudents = studentIds.length

    if(studentIds.length !== 0) {
      if(taskIdx && taskIdx !== 0) {
        let taskOption = tasks.querySelector(`#task-${taskIdx}`)
        let taskTitle = taskOption.getAttribute('data-title')
        let taskId = taskOption.getAttribute('data-id')
        this.props.addAssignmentsRequest({status: 'assigned', type: 'task', task_id: taskId, title: taskTitle, due_date: this.state.due_date}, studentIds)
        numCreated += studentIds.length
      }

      if(quizIdx && quizIdx !== 0) {
        let quizOption = quizzes.querySelector(`#quiz-${quizIdx}`)
        let quizTitle = quizOption.getAttribute('data-title')
        let quizId = quizOption.getAttribute('data-id')
        this.props.addAssignmentsRequest({status: 'assigned', type: 'quiz', quiz_id: quizId, title: quizTitle, due_date: this.state.due_date}, studentIds)
        numCreated += studentIds.length
      }
      this.setState({message: `${numCreated} assignments were created for ${numStudents} students`})
      clearForm()
    }
    else {
      this.setState({message: 'Please select a student'})
    }
  }

  handleChange(date) {
    this.setState({
      due_date: date
    })
  }

  render(){
    return (
      <TeacherFunctions {...this.props} handleSubmit={this.handleSubmit} handleChange={this.handleChange} due_date={this.state.due_date} message={this.state.message} />
    )
  }
}

const toggleCheckAll = (tbodyId, status) => (dispatch) => {
	let checkboxes = document.querySelectorAll(`${tbodyId} td.select input[type="checkbox"]`)
	checkboxes = [...checkboxes]
	checkboxes.forEach(checkbox => {
		checkbox.checked = status
	})
}

const clearForm = () => {
	let checkboxes = document.querySelectorAll('input[type="checkbox"]')
	checkboxes = [...checkboxes]
	checkboxes.forEach(checkbox => {
		checkbox.checked = false
	})
	let selects = document.querySelectorAll('select')
	selects = [...selects]
	selects.forEach(select => {
		select.selectedIndex = 0
	})
}

const displayMessage = (message) => {
	document.getElementById('message-box').innerHTML = message
}

// const handleSubmit = (evt) => (dispatch, getState) => {

// 	evt.preventDefault()

// 	let tasks = document.getElementById('tasks')
// 	let taskIdx = tasks.selectedIndex || 0

// 	let quizzes = document.getElementById('quizzes')
// 	let quizIdx = quizzes.selectedIndex || 0

// 	let studentIds = document.querySelectorAll(`#students tr.student td.select input[type="checkbox"]:checked`)
// 	studentIds = [...studentIds].map(input => {
// 		return +input.value
// 	})

// 	let numCreated = 0
// 	let numStudents = studentIds.length

// 	if(studentIds.length !== 0) {
// 			console.log('taskIdx===>', taskIdx)
// 		if(taskIdx && taskIdx !== 0) {
// 			let taskOption = tasks.querySelector(`#task-${taskIdx}`)
// 			let taskTitle = taskOption.getAttribute('data-title')
// 			let taskId = taskOption.getAttribute('data-id')
// 			dispatch(addAssignmentsRequest({status: 'assigned', type: 'task', task_id: taskId, title: taskTitle}, studentIds))
// 			numCreated += studentIds.length
// 		}

// 		if(quizIdx && quizIdx !== 0) {
// 			let quizOption = quizzes.querySelector(`#quiz-${quizIdx}`)
// 			let quizTitle = quizOption.getAttribute('data-title')
// 			let quizId = quizOption.getAttribute('data-id')
// 			dispatch(addAssignmentsRequest({status: 'assigned', type: 'quiz', quiz_id: quizId, title: quizTitle}))
// 			numCreated += studentIds.length
// 		}
// 	clearForm()
// 	// update this to retrieve from state...
// 	displayMessage(`${numCreated} assignments were created for ${numStudents} students`)
// 	}
// 	else {
// 		displayMessage('')
// 	}
// }

const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students,
    library: state.library
  }
}

const mapDispatch = {addAssignmentsRequest, toggleCheckAll}

export default connect(mapState, mapDispatch)(TeacherFunctionsContainer)
