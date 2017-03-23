import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import TeacherStudents from '../components/TeacherStudents'
//import {} from '../reducers/tracker'

const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students
  }
}

//const mapDispatch = {}

export default connect (mapState) (TeacherStudents)
