import React from 'react'
import QuizContainer from '../containers/QuizContainer'
import TaskContainer from '../containers/TaskContainer'
const Chatbox = ({open, handleToggleChatbox}) => {
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
                            <li className="left clearfix"><span className="chat-img pull-left">
                                <img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" className="img-circle" />
                            </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <strong className="primary-font">Jack Sparrow</strong> <small className="pull-right text-muted">
                                            <span className="glyphicon glyphicon-time"></span>12 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                        dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
                            <li className="right clearfix"><span className="chat-img pull-right">
                                <img src="http://placehold.it/50/FA6F57/fff&amp;text=ME" alt="User Avatar" className="img-circle" />
                            </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>13 mins ago</small>
                                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                        dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
                            <li className="left clearfix"><span className="chat-img pull-left">
                                <img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" className="img-circle" />
                            </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <strong className="primary-font">Jack Sparrow</strong> <small className="pull-right text-muted">
                                            <span className="glyphicon glyphicon-time"></span>14 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                        dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
                            <li className="right clearfix"><span className="chat-img pull-right">
                                <img src="http://placehold.it/50/FA6F57/fff&amp;text=ME" alt="User Avatar" className="img-circle" />
                            </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>15 mins ago</small>
                                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                        dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
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

