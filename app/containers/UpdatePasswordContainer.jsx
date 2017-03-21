import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'

import UpdatePassword from '../components/UpdatePassword'
import validatePassword from '../validators/validatePassword'
import { checkPassword, updatePassword } from '../reducers/auth'


const mapState = () => ({})

const mapDispatch = {asyncValidate: checkPassword, updatePassword}


const PasswordForm = reduxForm({
  form: 'password',
  asyncBlurFields: ['password'],
  validate: validatePassword
})(UpdatePassword)

export default connect(mapState, mapDispatch)(PasswordForm)
