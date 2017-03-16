import {connect} from 'react-redux'

import TeacherCalendar from '../components/TeacherCalendar'


const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students
  }
}
export default connect(mapState)(TeacherCalendar)
