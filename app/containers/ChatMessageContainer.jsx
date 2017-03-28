import {connect} from 'react-redux'
import React, { Component } from 'react'

import ChatMessage from '../components/ChatMessage'

const findAge = time => {
  let current = Date.now()
  let timediff = current-time
  return Math.ceil(timediff/1000/60)
}

class ChatMessageContainer extends Component {
  constructor() {
    super()
    this.state = {
      born: Date.now(),
      age: 0
    }
  }


  componentDidMount () {
    updateAge = setInterval(() => {
      let age = findAge(this.state.born)
      this.setState({age})
      }, 1000*60)
  }

  componentWillUnmount (){
    clearInterval(updateAge)
  }

  render () {
    const {age} = this.state

    return (
      <ChatMessage {...this.props} age={age} />
    )
  }
}

export default ChatMessageContainer
