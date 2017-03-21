import React from 'react'
import { Link } from 'react-router'

import StudentStats from './Dashboard/StudentStats'
import NotificationsPanel from './Dashboard/NotificationsPanel'
import CalendarSmall from './Dashboard/CalendarSmall'
import AssignmentsPanel from './Dashboard/AssignmentsPanel'

const StudentDashboard = ({user, assignments, teacher}) => {

  return (
		<div className="dashboard">
      <div className="container panel-container">
        
        <StudentStats assignments={assignments} />

        <div className="flex-container">
          <div className="flex-child">

            <NotificationsPanel assignments={assignments} />

            <CalendarSmall />
            
          </div>
          <div className="flex-child">

            <AssignmentsPanel assignments={assignments}/>

          </div>
        </div>
      </div>
    </div>
   )
}

export default StudentDashboard
