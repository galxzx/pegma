import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  student: require('./student').default,
  teacher: require('./teacher').default,
  library: require('./library').default,
  tracker: require('./tracker').default,
  form
})

export default rootReducer
