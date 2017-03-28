import {connect} from 'react-redux'

import StudentCalendar from '../components/StudentCalendar'


const mapState = (state) => {
  return {
    user: state.auth,
    teacher: state.student.teacher
  }
}
export default connect(mapState)(StudentCalendar)
