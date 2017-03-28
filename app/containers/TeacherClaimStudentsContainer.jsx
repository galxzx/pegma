import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import TeacherClaimStudents from '../components/TeacherClaimStudents'
import {claimStudentRequest} from '../reducers/teacher'

const mapState = (state) => {
  return {
    user: state.auth,
   	unclaimedStudents: state.teacher.unclaimedStudents
  }
}

const mapDispatch = {claimStudentRequest}

export default connect (mapState, mapDispatch) (TeacherClaimStudents)
