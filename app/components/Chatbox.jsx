import React from 'react'
import QuizContainer from '../containers/QuizContainer'
import TaskContainer from '../containers/TaskContainer'
const Chatbox = ({open, handleToggleChatbox, messages, handleMessageSubmit, user, chatName, users}) => {
    console.log(messages, '<======')
    return (

        <div id="chatbox-container">
            <div className="chatbox-panel">
                <div className="heading">
                    <span id="chatbox-title">Classroom Chatbox</span>
                    <button type="button" className={`show-chatbox ${open ? 'icon-down' : 'icon-up'}`} onClick={handleToggleChatbox}>                     </button>
                </div>
                { open ? (
                <div>
                    <div className="body">
                        <ul className="chat">
                         {  messages.map((message, idx) => {

                                return(
                                    <li key={idx}
                                        className={(message.user === chatName ? "align-right" : "")}>
                                        <span className="chat-img pull-left">
                                            <img src={message.imageUrl} alt="User Avatar" className="img-circle" />
                                        </span>
                                        <div className="chat-body">
                                            <div className="header">
                                                <strong className="primary-font">{message.user}</strong> <small className="pull-right text-muted">
                                                    <span className="icon-clock-o"></span>12 mins ago</small>
                                            </div>
                                            <p>
                                                <strong>{`TO ${message.to}: `}</strong>{message.text}
                                            </p>
                                        </div>
                                    </li>
                                )
                        }) }
                        </ul>
                    </div>
                    <div className="footer">
                        <div className="input-group">
                            <form onSubmit={handleMessageSubmit} >
                                <input id="btn-input" name="message" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                                <span id="recipient-label">Send Message To</span>
                                <select id="recipient" name="to" defaultValue="Send Message To Everybody">
                                    <option value="">Everybody</option>
                                    {users.map(user => {
                                        return (
                                            <option key={user} value={user}>{user}</option>
                                        )
                                    })}
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

export default Chatbox

