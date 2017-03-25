import {connect} from 'react-redux'

import Rewards from '../components/Rewards'


const mapState = (state) => {
  return {
    user: state.auth
  }
}
export default connect(mapState)(Rewards)
