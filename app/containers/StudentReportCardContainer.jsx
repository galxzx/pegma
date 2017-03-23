import {connect} from 'react-redux'

import StudentReportCard from '../components/StudentReportCard'

const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments
  }
}
export default connect(mapState)(StudentReportCard)
