import {connect} from 'react-redux'

import TeacherSettings from '../components/TeacherSettings'


const mapState = (state) => {
  return {
    user: state.auth
  }
}
export default connect(mapState)(TeacherSettings)
