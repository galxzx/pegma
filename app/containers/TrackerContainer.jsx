import {connect} from 'react-redux'

import StudentTracker from '../components/StudentTracker'


const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments
  }
}
export default connect (mapState) (Tracker)
