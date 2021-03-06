import React, { Component } from 'react'

import ChatMessageContainer from '../Containers/ChatMessageContainer'

class Chatbox extends Component {

  render () {

    const { open, handleToggleChatbox, messages, handleMessageSubmit, user, chatName, users } = this.props

    return (
      <div id="chatbox-container">
        <div className="chatbox-panel">
          <div className="heading">
            <span id="chatbox-title">Classroom Chatbox</span>
            <i className={`show-chatbox ${open ? 'icon-angle-double-down' : 'icon-angle-double-up'}`} onClick={handleToggleChatbox}></i>
          </div>
          { 
            open ? (
              <div>
                <div className="body" ref={(div) => { this.messageList = div }} >
                  <ul className="chat">
                    { 
                      messages.map((message, idx) => {
                        return (
                          <ChatMessageContainer chatName={chatName} message={message} key={idx} />
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="footer">
                  <div className="input-group">
                    <form onSubmit={handleMessageSubmit} >
                      <input id="btn-input" name="message" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                      <span id="recipient-label">Send Message To</span>
                      <select id="recipient" name="to" defaultValue="Send Message To Everybody">
                          <option value="">Everybody</option>
                          {
                            users.map(user => {
                              return (
                                <option key={user} value={user}>{user}</option>
                              )
                            })
                          }
                      </select>
                      <span className="input-group-btn">
                        <button type="submit" className="" id="btn-chat">Send</button>
                      </span><br/>
                    </form>
                  </div>
                </div>
              </div>
            ) : <div></div>
          }
        </div>
      </div>
    )
  }

  scrollToBottom () {
    if (this.messageList) {
      const scrollHeight = this.messageList.scrollHeight;
      const height = this.messageList.clientHeight;
      const maxScrollTop = scrollHeight - height;
      this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  }

  componentDidUpdate () {
    this.scrollToBottom();
  }
}

export default Chatbox

