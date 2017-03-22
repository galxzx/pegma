const validatePassword = values => {
  const errors = {}
  if(!values.name) errors.name = 'Name is required'
  if(!values.email) errors.email = 'Email is required'
  if(!values.type) errors.type = 'Account Type is required'
  if(!values.password) errors.password = 'Password is required'
  if (values.password !== values.verPwd) {
    errors.password = 'Passwords must be the same'
    errors.verPwd = 'Passwords must be the same'
  }
  if(values.type === 'student') {
    if(!values.teacher) errors.type = "Teacher is required"
  }
  return errors
}


export default validatePassword
