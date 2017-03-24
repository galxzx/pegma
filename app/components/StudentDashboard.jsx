import React from 'react'

import StudentStats from './Dashboard/StudentStats'
import StudentNotificationsPanel from './Dashboard/StudentNotificationsPanel'
import CalendarSmall from './Dashboard/CalendarSmall'
import StudentAssignmentsPanel from './Dashboard/StudentAssignmentsPanel'

const StudentDashboard = ({user, assignments, teacher}) => {

  return (
		<div key="StudentDashboard" className="dashboard">
      <div className="container panel-container">

        <StudentStats assignments={assignments} />

        <div className="flex-container">
          <div className="flex-child">

            <StudentNotificationsPanel assignments={assignments} />

            <CalendarSmall />

          </div>
          <div className="flex-child">

            <StudentAssignmentsPanel />

          </div>
        </div>
      </div>
    </div>
   )
}

export default StudentDashboard
