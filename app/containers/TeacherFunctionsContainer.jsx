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

const handleSubmit = (evt) => (dispatch) => {
	
	evt.preventDefault()

	let tasks = document.getElementById('tasks')
	let taskIdx = tasks.selectedIndex || 0



	if(taskIdx && taskIdx !== 0) {
		let taskOption = tasks.querySelector(`#task-${taskIdx}`)
		let taskTitle = taskOption.getAttribute('data-title')
		let taskId = taskOption.getAttribute('data-id')
		dispatch(addAssignmentRequest({task_id: taskId, title: taskTitle}, []))
	}

	// let quizzes = document.getElementById('quizzes')
	// let quizIdx = quizzes.selectedIndex || 0

	// if(quizIdx && quizId !== 0) {
	// 	let quizOption = tasks.querySelector(`#task-${taskIdx}`)
	// 	let taskTitle = quizOption.getAttribute('data-title')
	// 	let quizId = quizOption.getAttribute('data-id')
	// 	dispatch(addAssignmentRequest({quiz_id: quizId, title: quizTitle}))
	// }
}

const mapDispatch = {handleSubmit}

export default connect(mapState, mapDispatch)(TeacherFunctions)
