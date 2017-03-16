import {connect} from 'react-redux'

import ClassTracker from '../components/ClassTracker'


const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students
  }
}
export default connect(mapState)(ClassTracker)
