import {connect} from 'react-redux'
import React, { Component } from 'react'

import ChatMessage from '../components/ChatMessage'

const findAge = time => {
  let current = Date.now()
  let timediff = current-time
  return Math.ceil(timediff/1000/60)
}

class ChatMessageContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      born: props.message.born,
      age: 0
    }
  }



  componentDidMount () {
    this.updateAge = setInterval(()=>{

      let age = findAge(this.props.message.born)
      this.setState({age: age})
    }, 60000)
  }
  componentWillUnmount (){
    console.log('unmounted =========================')
    clearInterval(this.updateAge)
  }

  render () {
    const {age} = this.state

    return (
      <ChatMessage {...this.props} age={age} />
    )
  }
}

export default ChatMessageContainer
