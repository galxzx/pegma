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
	let idx = tasks.selectedIndex
	let option = tasks.querySelector(`#task-${idx}`)
	let title = option.getAttribute('data-title')
	let taskId = option.getAttribute('data-id')
	console.log(idx, 'idx', taskId, 'taskId' )

	dispatch(addAssignmentRequest({task_id: taskId, title: title}))
}

const mapDispatch = {handleSubmit}

export default connect(mapState, mapDispatch)(TeacherFunctions)
