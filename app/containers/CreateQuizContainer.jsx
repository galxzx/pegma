import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CreateQuiz from '../components/CreateQuiz'
import validateQuiz from '../validators/validateQuiz'




const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

const CreateQuizForm = reduxForm ({
  form: 'createquiz',
  validate: validateQuiz
})(CreateQuiz)

export default connect(mapState, mapDispatch)(CreateQuizForm)
