import {connect} from 'react-redux'

import TeacherDashboard from '../components/TeacherDashboard'


const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students,
    calendar: state.teacher.calendar
  }
}
export default connect (mapState) (TeacherDashboard)
