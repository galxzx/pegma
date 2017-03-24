import {connect} from 'react-redux'

import Chatbox from '../components/Chatbox'
import {handleToggleChatbox} from '../reducers/chatbox'

const mapState = (state) => {
  return {
    user: state.auth,
    open: state.chatbox.open
  }
}
const mapDispatch = {handleToggleChatbox}

export default connect(mapState, mapDispatch)(Chatbox)
