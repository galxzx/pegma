import {connect} from 'react-redux'

import Assignment from '../components/Assignment'


const mapState = (state) => {
  return {
    user: state.auth,
    currentAssignment: state.student.currentAssignment
  }
}
export default connect(mapState)(Assignment)
