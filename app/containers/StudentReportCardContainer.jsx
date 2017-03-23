import {connect} from 'react-redux'

import StudentReportCard from '../components/StudentReportCard'

const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments,
    teacher: state.student.teacher
  }
}
export default connect(mapState)(StudentReportCard)
