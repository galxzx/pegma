import {connect} from 'react-redux'
import React, { Component } from 'react'

import Chatbox from '../components/Chatbox'
import {handleToggleChatbox} from '../reducers/chatbox'

//const socket = io()
// io.connect('http://localhost:1337?')

class ChatboxContainer extends Component {
  constructor (props) {
    super ()
    this.state = {
      users: [],
      messages: [{user: 'me', text: 'this is a message'}, {user:'you', text: 'this is another message'}],
      text: '',
      chatName: '',
      user: '',
      room: props.user.teacher_id ? "" + props.user.teacher_id : "" + props.student.teacher.id


    }
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
    this._messageRecieve = this._messageRecieve.bind(this)
    this._initialize = this._initialize.bind(this)
    this._userJoined = this._userJoined.bind(this)
    this._userLeft = this._userLeft.bind(this)
    // this._userChangedName = this._userChangedName.bind(this)
  }

  componentWillUpdate(nextProps, nextState){
    console.log(nextState, 'nextState')
    console.log(nextProps, 'nextProps')
    if(nextProps.student.teacher && this.state.room !== ''+nextProps.student.teacher.id) this.setState({room: '' + nextProps.student.teacher.id})
  }

  componentDidMount() {
    console.log('current state', this.state)
    this.socket = io.connect('', {query: `room=${this.state.room}&name=${this.props.user.firstName}`})
    this.socket.on('init', this._initialize);
    this.socket.on('send:message', this._messageRecieve);
    this.socket.on('user:join', this._userJoined);
    this.socket.on('user:left', this._userLeft);
    // socket.on('change:name', this._userChangedName);
    //this.socket.emit('change:name', {name: this.props.user.firstName})
  }

  _initialize(data) {
    var {users, name} = data;
    this.setState({users, chatName: name});
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
    let newMessage = {user:this.state.chatName, text:event.target.message.value}
    messages.push(newMessage)
    this.setState({messages})
    this.socket.emit('send:message', newMessage)

    let input = document.querySelector('#chatbox-container .footer input')
    input.value = ''
  }
  render () {
    return <Chatbox {...this.props} chatName={this.state.chatName} messages={this.state.messages} handleMessageSubmit={this.handleMessageSubmit} />
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
    open: state.chatbox.open,
    student: state.student
  }
}
const mapDispatch = {handleToggleChatbox}

export default connect(mapState, mapDispatch)(ChatboxContainer)
