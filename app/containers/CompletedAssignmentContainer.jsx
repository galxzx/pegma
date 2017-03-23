import {connect} from 'react-redux'

import CompletedAssignment from '../components/CompletedAssignment'


const mapState = (state) => {
  return {
    user: state.auth,
    currentAssignment: state.student.currentAssignment
  }
}
export default connect(mapState)(CompletedAssignment)
