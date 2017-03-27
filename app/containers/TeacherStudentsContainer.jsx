import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import TeacherStudents from '../components/TeacherStudents'
import {dropStudentRequest} from '../reducers/teacher'

const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students
  }
}

const mapDispatch = {dropStudentRequest}

export default connect (mapState, mapDispatch) (TeacherStudents)
