import {connect} from 'react-redux'

import Home from '../components/Home'

const mapState = (state) => {
  return {
    user: state.auth
  }
}
export default connect (mapState) (Home)
