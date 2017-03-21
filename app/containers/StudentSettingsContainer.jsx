import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

import StudentSettings from '../components/StudentSettings'
import { updateStudent } from '../reducers/auth'



const mapState = (state) => {
  return {
    initialValues: state.auth

  }
}

const mapDispatch = {updateStudent}


const SettingsForm = reduxForm({
  form: 'studentSettings',
})(StudentSettings)

export default connect(mapState, mapDispatch)(SettingsForm)

