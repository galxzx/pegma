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
	console.log(evt.target.tasks.getAttribute('data-title'), '<========= data title')
	dispatch(addAssignmentRequest(evt.target))
}

const mapDispatch = {handleSubmit}

export default connect(mapState, mapDispatch)(TeacherFunctions)
