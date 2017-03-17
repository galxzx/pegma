import {connect} from 'react-redux'

import Quiz from '../components/Quiz'


const mapState = (state) => {
  return {
    user: state.auth,
    currentQuiz: state.student.currentQuiz
  }
}
export default connect(mapState)(Quiz)
