import axios from 'axios'

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
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        console.log('user   ', user)
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export const updateStudent = () =>
  (dispatch, getState) =>{
    const state = getState()
    const userId = state.auth.id
    const newInfo = state.form.studentSettings.values
    return axios.put(`/api/users/${userId}`, newInfo)
      .then(() => dispatch(whoami()))
      .catch(err => console.error(err))
}

export default reducer
