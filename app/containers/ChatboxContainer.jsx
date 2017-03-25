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
      text: '',
      chatUser: '',
      user: ''

    }
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
    this._messageRecieve = this._messageRecieve.bind(this)
    this._initialize = this._initialize.bind(this)
    this._userJoined = this._userJoined.bind(this)
    this._userLeft = this._userLeft.bind(this)
    // this._userChangedName = this._userChangedName.bind(this)
  }

  componentDidMount() {
    console.log('user is loaded?', this.props.user)
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
    socket.on('user:join', this._userJoined);
    socket.on('user:left', this._userLeft);
    // socket.on('change:name', this._userChangedName);
    socket.emit('change:name', {name: this.props.user.firstName})
  }

  _initialize(data) {
    var {users, name} = data;
    this.setState({users});
  }

  _messageRecieve(message) {
    var {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  _userJoined(data) {
    console.log('user joined')
    var {users, messages} = this.state;
    var {name} = data;
    users.push(name);
    messages.push({
      user: 'APPLICATION BOT',
      text : name +' Joined'
    });
    this.setState({users, messages});
  }

  _userLeft(data) {
    var {users, messages} = this.state;
    var {name} = data;
    var index = users.indexOf(name);
    users.splice(index, 1);
    messages.push({
      user: 'APPLICATION BOT',
      text : name +' Left'
    });
    this.setState({users, messages});
  }

  // _userChangedName(data) {
  //   var {oldName, newName} = data;
  //   var {users, messages} = this.state;
  //   var index = users.indexOf(oldName);
  //   users.splice(index, 1, newName);
  //   messages.push({
  //     user: 'APPLICATION BOT',
  //     text : 'Change Name : ' + oldName + ' ==> '+ newName
  //   });
  //   this.setState({users, messages});
  // }

  handleMessageSubmit(event) {
    event.preventDefault()
    console.log(event.target.message.value, 'in handle message')
    const {messages} = this.state
    let newMessage = {user:this.props.user.firstName, text:event.target.message.value}
    messages.push(newMessage)
    this.setState({messages})
    socket.emit('send:message', newMessage)

    let input = document.querySelector('#chatbox-container .footer input')
    input.value = ''
  }
  render () {
    return <Chatbox {...this.props} messages={this.state.messages} handleMessageSubmit={this.handleMessageSubmit} />
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
