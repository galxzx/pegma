import {connect} from 'react-redux'

import StudentApp from '../components/StudentApp'


const mapState = (state) => {
  return {
    user: state.auth
  }
}
export default connect (mapState) (StudentApp)
