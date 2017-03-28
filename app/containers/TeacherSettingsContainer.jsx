import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

import TeacherSettings from '../components/TeacherSettings'
import { updateTeacher } from '../reducers/auth'

const mapState = (state) => {
  return {
    initialValues: Object.assign({}, state.auth),
    user: state.auth
  }
}

const mapDispatch = {updateTeacher}

const SettingsForm = reduxForm({
  form: 'teacherSettings',
})(TeacherSettings)

export default connect(mapState, mapDispatch)(SettingsForm)
