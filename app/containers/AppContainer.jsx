import {connect} from 'react-redux'

import App from '../components/App'


const mapState = (state) => {
  return {
    user: state.auth,
    teacher: state.student ? state.student.teacher : null
  }
}
export default connect (mapState) (App)
