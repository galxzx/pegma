import React from 'react'
import { connect } from 'react-redux'

import CompletedQuiz from '../components/CompletedQuiz'


const mapState = (state) => {

  return {
    user: state.auth,
    quiz: state.student.quiz,
    currentAssignment: state.student.currentAssignment
  }
}


export default connect(mapState)(CompletedQuiz)
