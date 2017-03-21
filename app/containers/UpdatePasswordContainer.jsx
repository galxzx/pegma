import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

import UpdatePassword from '../components/UpdatePassword'
import { checkPassword } from '../reducers/auth'



const mapState = (state) => {
  return {
    initialValues: state.auth

  }
}

const mapDispatch = {asyncValidate: checkPassword}


const SettingsForm = reduxForm({
  form: 'updatePassword',
})(UpdatePassword)

export default connect(mapState, mapDispatch)(SettingsForm)
