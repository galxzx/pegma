import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Quiz from '../components/Quiz'

import {gradeQuiz} from '../reducers/student'


const mapState = (state) => {
  return {
    user: state.auth,
    quiz: state.student.quiz,
    quizForm: state.form.quiz
  }
}

const mapDispatch = (dispatch) => {
  return {
    gradeQuiz: () => dispatch(gradeQuiz())
  }
}

const QuizForm = reduxForm ({
  form: 'quiz'
})(Quiz)

export default connect(mapState, mapDispatch)(QuizForm)
