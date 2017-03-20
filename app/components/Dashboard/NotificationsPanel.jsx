import React from 'react'
import { Link } from 'react-router'

const NotificationsPanel = ({assignments}) => {

  return (
    <section className="panel notifications">
      <div className="panel-header">Notifications</div>
      <ul className="notifications-list">
        <li className="overdue">Assignment X is overdue.<span className="icon icon-external-link-sqaure"></span></li>
        <li>Assignment Y graded.<span className="icon icon-external-link-sqaure"></span></li>
        <li>New Assigment Z added.<span className="icon icon-external-link-sqaure"></span></li>
        <li>New Assigment W added.<span className="icon icon-external-link-sqaure"></span></li>
        <li>New Assigment W added.<span className="icon icon-external-link-sqaure"></span></li>
        <li>Assignment H graded.<span className="icon icon-external-link-sqaure"></span></li>
      </ul>
    </section>
  )
}

export default NotificationsPanel
