import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CreateTask from '../components/CreateTask'
import validateQuiz from '../validators/validateQuiz'
import { addTask } from '../reducers/library'




const mapState = (state) => {
  return {
  }
}

const mapDispatch = {addTask}

const CreateTaskForm = reduxForm ({
  form: 'createtask',
  validate: validateQuiz
})(CreateTask)

export default connect(mapState, mapDispatch)(CreateTaskForm)
