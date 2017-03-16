import {connect} from 'react-redux'

import TeacherApp from '../components/TeacherApp'


const mapState = (state) => {
  return {
    user: state.auth
  }
}
export default connect (mapState) (TeacherApp)
