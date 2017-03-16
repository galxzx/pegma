import {connect} from 'react-redux'

import Tracker from '../components/Tracker'


const mapState = (state) => {
  return {
    user: state.auth,
    assignments: state.student.assignments
  }
}
export default connect (mapState) (Tracker)
