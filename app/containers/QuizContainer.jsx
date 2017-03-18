import {connect} from 'react-redux'

import Quiz from '../components/Quiz'


const mapState = (state) => {
  return {
    user: state.auth,
    quiz: state.student.quiz
  }
}
export default connect(mapState)(Quiz)
