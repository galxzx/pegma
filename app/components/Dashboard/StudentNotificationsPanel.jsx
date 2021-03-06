import React from 'react'
import { Link } from 'react-router'

const NotificationsPanel = ({assignments}) => {

  const notifications = []

  assignments.forEach((assignment, idx) => {
    if (assignment.overdue) {
      notifications.push(<Link to={`/student/assignment/${assignment.id}`} key={idx}><li><span className="icon icon-clock-o red"></span>Assignment "{assignment.title}" is overdue.<span className="icon float-right icon-external-link-square"></span></li></Link>)
    }
    else if (assignment.isNew && assignment.status === 'assigned') {
      notifications.push(<Link to={`/student/assignment/${assignment.id}`} key={idx}><li><span className="icon icon-burst-new blue"></span>New Assignment "{assignment.title}".<span className="icon float-right icon-external-link-square"></span></li></Link>)
    }
    else if (assignment.recentlyUpdated && assignment.grade) {
      notifications.push(<Link to={`/student/assignment/${assignment.id}`} key={idx}><li>Assignment "{assignment.title}" was graded.<span className="icon float-right icon-external-link-square"></span></li></Link>)
    }
  })

  return (
    <section className="panel notifications">
      <div className="panel-header">Notifications</div>
      <ul className="notifications-list">
        {
          (notifications.length) ?
            notifications.map(notification => {
              return notification
            }) :
            <li>No notifications to display.</li>
        }
      </ul>
    </section>
  )
}

export default NotificationsPanel
