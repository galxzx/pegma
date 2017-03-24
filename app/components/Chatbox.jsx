import React from 'react'
import QuizContainer from '../containers/QuizContainer'
import TaskContainer from '../containers/TaskContainer'
const Chatbox = ({open, handleToggleChatbox, messages}) => {
    return (

        <div id="chatbox-container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-comment"></span> Chat
                    <div className="btn-group pull-right">
                        <button type="button" className="btn btn-default btn-xs" onClick={handleToggleChatbox}>
                            <span className={`glyphicon ${open ? 'glyphicon-chevron-down' : 'glyphicon-chevron-up'}`}></span>
                        </button>
                    </div>
                </div>
                { open ? (
                <div>
                    <div className="panel-body">
                        <ul className="chat">
                         {  messages.map((message, idx) => {
                                return(
                                     <li key={idx} className="left clearfix"><span className="chat-img pull-left">
                                        <img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" className="img-circle" />
                                    </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">{message.user}</strong> <small className="pull-right text-muted">
                                                    <span className="glyphicon glyphicon-time"></span>12 mins ago</small>
                                            </div>
                                            <p>
                                                {message.text}
                                            </p>
                                        </div>
                                    </li>
                                )
                        }) }
                        </ul>
                    </div>
                    <div className="panel-footer">
                        <div className="input-group">
                            <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                            <span className="input-group-btn">
                                <button className="btn btn-warning btn-sm" id="btn-chat">
                                    Send
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                ) : <div></div>
                }
            </div>
        </div>

    )
}

export default Chatbox

