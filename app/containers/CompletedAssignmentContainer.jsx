import {connect} from 'react-redux'

import CompletedAssignment from '../components/CompletedAssignment'
import { updateGrade } from '../reducers/teacher'


const mapState = (state) => {
  return {
    user: state.auth,
    currentAssignment: state.student.currentAssignment
  }
}

const mapDispatch = { updateGrade }
export default connect(mapState, mapDispatch)(CompletedAssignment)
