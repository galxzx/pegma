import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

import StudentSettings from '../components/StudentSettings'
import { updateStudent } from '../reducers/auth'

const mapState = (state) => {
  return {
    initialValues: Object.assign({}, state.auth, {teacher: state.student.teacher.user.firstName + ' ' + state.student.teacher.user.lastName}),
    user: state.auth
  }
}

const mapDispatch = {updateStudent}

const SettingsForm = reduxForm({
  form: 'studentSettings',
})(StudentSettings)

export default connect(mapState, mapDispatch)(SettingsForm)

