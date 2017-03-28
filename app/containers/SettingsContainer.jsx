import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

import Settings from '../components/Settings'
import { updateUser } from '../reducers/auth'

const mapState = (state) => {
	let currentTeacher = null;
	if (state.student) currentTeacher = `${state.student.teacher.user.firstName} ${state.student.teacher.user.lastName}`

	console.log(state)
  return {
    initialValues: Object.assign({}, state.auth, {teacher: currentTeacher}),
    user: state.auth
  }
}

const mapDispatch = {updateUser}

const SettingsForm = reduxForm({
  form: 'userSettings',
})(Settings)

export default connect(mapState, mapDispatch)(SettingsForm)
