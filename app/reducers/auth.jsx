import axios from 'axios'
import {browserHistory} from 'react-router'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  (dispatch, getState) =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))
      .then(() => {
        const state = getState()
        if (state.auth.teacher_id) browserHistory.push('/teacher/dashboard')
        else browserHistory.push('/student/dashboard')
      })

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        clearStudentRequest()
      })
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))
      .then(() => browserHistory.push('/home'))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        // console.log('user   ', user)
        dispatch(authenticated(user))
        return user
      })
      .catch(failed => dispatch(authenticated(null)))

export const updateStudent = () =>
  (dispatch, getState) => {
    const state = getState()
    const userId = state.auth.id
    const newInfo = state.form.studentSettings.values
    return axios.put(`/api/users/${userId}`, newInfo)
      .then(() => dispatch(whoami()))
      .catch(err => console.error(err))
}

export const checkPassword = (values) =>
  (dispatch, getState) => {
    const user =  getState().auth
    return axios.post('/api/auth/checkPassword', {user, password: values.password})
    .then(() => {})
    .catch(() => {
      return {password: 'Incorrect Password'}
    })
  }

export const updatePassword = () =>
  (dispatch, getState) => {
    const state = getState()
    const user = Object.assign({}, state.auth, state.form.password.values )
    return axios.post('/api/auth/updatePassword', user)
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push(`/${user.userType}/dashboard`))
      .catch(() => dispatch(whoami()))
  }

export const checkEmail = (values) =>
  dispatch =>
    axios.post('/api/auth/checkEmail', {email: values.email})
      .then(() => {})
      .catch(() => ({email: 'User already exists with that email'}))



export default reducer
