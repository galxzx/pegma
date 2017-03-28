const validateSignup = values => {
  const errors = {}
  if(values.avatar && !checkURL(values.avatar)) errors.avatar = 'Avatar must be an image URL'
  if(!values.name) errors.name = 'Name is required'
  if(!values.email) errors.email = 'Email is required'
  if(values.email && !checkEmail(values.email)) errors.email = 'Email is invalid'
  if(!values.type) errors.type = 'Account Type is required'
  if(!values.password) errors.password = 'Password is required'
  if (values.password !== values.verPwd) {
    errors.password = 'Passwords must be the same'
    errors.verPwd = 'Passwords must be the same'
  }
  if(values.type === 'student') {
    if(!values.teacher) errors.type = 'Teacher is required'
  }
  return errors
}

export default validateSignup

const checkURL = (url) => (url.match(/\.(jpeg|jpg|gif|png)$/) !== null)

const checkEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(re) !== null;
}