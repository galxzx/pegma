import React from 'react'
import { Link } from 'react-router'

const TeacherNotifications = ({students}) => {

  const notifications = []

  students.forEach((student, idxS) => {
    let currentStudent = `${student.user.firstName} ${student.user.lastName[0]}`  
    student.assignments.forEach((assignment, idxA) => {
      let status = assignment.status
      let type = assignment.type
      let title = assignment.title
      let overdue = assignment.overdue
      let updated = assignment.recentlyUpdated

      if (overdue) {
        notifications.push(<Link to={'/'} key={`${idxS}-${idxA}`}><li><span className="icon icon-clock-o red"></span> {currentStudent}'s assignment "{title}" is late.<span className="icon float-right icon-external-link-square"></span></li></Link>)
      }
      else if (status === 'completed' && type === 'task') {
        notifications.push(<Link to={'/'} key={`${idxS}-${idxA}`}><li>{currentStudent}'s task "{title}" is ready to grade.<span className="icon float-right icon-external-link-square"></span></li></Link>)
      }

    })
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

export default TeacherNotifications