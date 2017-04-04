import React, { Component } from 'react'

const ChatMessage = ({message, chatName, age}) => {

  return (
    <li
      className={(message.user === chatName ? "align-right" : "")}>
      <span className="chat-img pull-left">
          <img src={message.imageUrl} alt="User Avatar" className="img-circle" />
      </span>
      <div className="chat-body">
          <div className="header">
              <strong className="primary-font">{message.user}</strong> <small className="pull-right text-muted">
                  <span className="icon-clock-o"></span>{age + ' '} mins ago</small>
          </div>
          <p>
              <strong>{`TO ${message.to.toUpperCase()}: `}</strong>{message.text}
          </p>
      </div>
    </li>
  )

  }

export default ChatMessage
