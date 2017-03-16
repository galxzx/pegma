import {connect} from 'react-redux'

import StudentCalendar from '../components/StudentCalendar'


const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments
  }
}
export default connect(mapState)(StudentCalendar)
