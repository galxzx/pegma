import {connect} from 'react-redux'

import TeacherDashboard from '../components/TeacherDashboard'


const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students,
  }
}
export default connect (mapState) (TeacherDashboard)
