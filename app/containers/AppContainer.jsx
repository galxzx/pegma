import {connect} from 'react-redux'

import App from '../components/App'


const mapState = (state) => {
  return {
    user: state.auth
  }
}
export default connect (mapState) (App)
