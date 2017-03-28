import React from 'react'

import TeacherStats from './Dashboard/TeacherStats'
import TeacherNotificationsPanel from './Dashboard/TeacherNotificationsPanel'
import TeacherCalendarSmall from './Dashboard/TeacherCalendarSmall'
import TeacherAssignmentsPanel from './Dashboard/TeacherAssignmentsPanel'

const TeacherDashboard = ({students, calendar}) => {

  return (

    <div className="dashboard dashboard-teacher">
      <div className="container panel-container">

        <TeacherStats students={students}/>

        <div className="flex-container">
          <div className="flex-child">

            <TeacherNotificationsPanel students={students}/>

            <TeacherCalendarSmall calendar={calendar}/>

          </div>
          <div className="flex-child">

            <TeacherAssignmentsPanel students={students}/>

          </div>
        </div>
      </div>
    </div>
   )
}

export default TeacherDashboard
