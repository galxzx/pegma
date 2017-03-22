import {connect} from 'react-redux'

import TeacherFunctions from '../components/TeacherFunctions'
import {addAssignmentRequest} from '../reducers/teacher'


const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students,
    library: state.library
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

const handleSubmit = (evt) => (dispatch, getState) => {
	
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
			console.log('taskIdx===>', taskIdx)
		if(taskIdx && taskIdx !== 0) {
			let taskOption = tasks.querySelector(`#task-${taskIdx}`)
			let taskTitle = taskOption.getAttribute('data-title')
			let taskId = taskOption.getAttribute('data-id')
			dispatch(addAssignmentRequest({status: 'assigned', type: 'task', task_id: taskId, title: taskTitle}, studentIds))
			numCreated += studentIds.length
		}

		if(quizIdx && quizIdx !== 0) {
			let quizOption = quizzes.querySelector(`#quiz-${quizIdx}`)
			let quizTitle = quizOption.getAttribute('data-title')
			let quizId = quizOption.getAttribute('data-id')
			dispatch(addAssignmentRequest({status: 'assigned', type: 'quiz', quiz_id: quizId, title: quizTitle}))
			numCreated += studentIds.length		
		}
	clearForm()
	// update this to retrieve from state...
	displayMessage(`${numCreated} assignments were created for ${numStudents} students`)
	}
	else {
		displayMessage('')
	}
}

const mapDispatch = {handleSubmit, toggleCheckAll}

export default connect(mapState, mapDispatch)(TeacherFunctions)
