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

const handleSubmit = (evt) => (dispatch) => {
	
	evt.preventDefault()

	let tasks = document.getElementById('tasks')
	let taskIdx = tasks.selectedIndex || 0

	let quizzes = document.getElementById('quizzes')
	let quizIdx = quizzes.selectedIndex || 0

	let studentIds = document.querySelectorAll(`#students tr.student td.select input[type="checkbox"]:checked`)
	studentIds = [...studentIds].map(input => {
		return +input.value
	})

	if(taskIdx && taskIdx !== 0) {
		let taskOption = tasks.querySelector(`#task-${taskIdx}`)
		let taskTitle = taskOption.getAttribute('data-title')
		let taskId = taskOption.getAttribute('data-id')
		dispatch(addAssignmentRequest({status: 'assigned', type: 'task', task_id: taskId, title: taskTitle}, studentIds))
	}

	if(quizIdx && quizIdx !== 0) {
		let quizOption = quizzes.querySelector(`#quiz-${quizIdx}`)
		let quizTitle = quizOption.getAttribute('data-title')
		let quizId = quizOption.getAttribute('data-id')
		dispatch(addAssignmentRequest({status: 'assigned', type: 'quiz', quiz_id: quizId, title: quizTitle}))
	}

}

const mapDispatch = {handleSubmit, toggleCheckAll}

export default connect(mapState, mapDispatch)(TeacherFunctions)
