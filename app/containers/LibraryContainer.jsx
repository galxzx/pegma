import {connect} from 'react-redux'

import Library from '../components/Library'


const mapState = (state) => {
  return {
    user: state.auth,
    students: state.teacher.students,
    library: state.library
  }
}
export default connect(mapState)(Library)
