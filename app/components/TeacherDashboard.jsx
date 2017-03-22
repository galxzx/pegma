import React from 'react'

import TeacherStats from './Dashboard/TeacherStats'
import TeacherNotifications from './Dashboard/TeacherNotifications'
import CalendarSmall from './Dashboard/CalendarSmall'
import TeacherAssignmentsPanel from './Dashboard/TeacherAssignmentsPanel'

const TeacherDashboard = ({students}) => {

  return (
		<div className="dashboard dashboard-teacher">
      <div className="container flex-container">
	      <div className="flex-child">

	        <TeacherStats />

	        <TeacherNotifications />

	        <CalendarSmall />

	      </div>
        <div className="flex-child">

          <TeacherAssignmentsPanel />

        </div>
      </div>
    </div>
   )
}

export default TeacherDashboard
