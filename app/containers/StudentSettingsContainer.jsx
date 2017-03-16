import {connect} from 'react-redux'

import StudentSettings from '../components/StudentSettings'


const mapState = (state) => {
  return {
    user: state.auth
  }
}
export default connect(mapState)(StudentSettings)
