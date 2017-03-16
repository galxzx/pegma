import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default, 
  student: require('./student').default,
  teacher: require('./teacher').default,
  library: require('./library').default  
})

export default rootReducer
