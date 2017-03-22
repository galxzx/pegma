import {connect} from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

import Signup from '../components/Signup'
import validateSignup from '../validators/validateSignup'
import { checkEmail } from '../reducers/auth'
import { createAccount } from '../reducers/signup'

const selector = formValueSelector('signup')

const mapState = state => ({
  typeValue: selector(state, 'type'),
  teachers: state.signup.teachers
})

const mapDispatch = {asyncValidate: checkEmail, createAccount}


const SignupForm = reduxForm({
  form: 'signup',
  validate: validateSignup,
  asyncBlurFields: ['email'],
})(Signup)

export default connect(mapState, mapDispatch)(SignupForm)
