const validatePassword = values => {
  const errors = {}
  if (values.newPwd !== values.verPwd) {
    errors.newPwd = 'Passwords must be the same'
    errors.verPwd = 'Passwords must be the same'
  }
  return errors
}


export default validatePassword
