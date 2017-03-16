import {connect} from 'react-redux'

import StudentDashboard from '../components/StudentDashboard'


const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments
  }
}
export default connect (mapState) (StudentDashboard)
