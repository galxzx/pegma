import {connect} from 'react-redux'
import React, { Component } from 'react'

import Chatbox from '../components/Chatbox'
import {handleToggleChatbox} from '../reducers/chatbox'

const socket = io.connect('http://localhost:1337')

class ChatboxContainer extends Component {
  constructor () {
    super ()
    this.state = {
      users: [],
      messages: [{user: 'me', text: 'this is a message'}, {user:'you', text: 'this is another message'}],
      text: ''
    }
  }

  componentDidMount(){
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
  }

  _initialize(data) {
    var {users, name} = data;
    this.setState({users, user: name});
  }

  _messageRecieve(message) {
    var {messages} = this.state;
    messages.push(message);
    this.setState({messages});

  }

  render () {
    return <Chatbox {...this.props} messages={this.state.messages} />
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
    open: state.chatbox.open
  }
}
const mapDispatch = {handleToggleChatbox}

export default connect(mapState, mapDispatch)(ChatboxContainer)
