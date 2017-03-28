import React from 'react'
import { Link } from 'react-router'

const StudentCalendarSmall = ({teacher}) => {

	const calendarURL = `${teacher.calendar}&showTitle=0`

  return (
    <section className="panel calendar">
      <div className="panel-header">Calendar</div>
      {
      	teacher && teacher.calendar ? (
	      	<iframe className="calendar-content-sm" src={ calendarURL }></iframe>
	      ) : (
	      	<div className="calendar-content-sm"><p>Your teacher hasn't set a calendar yet.</p></div>
	      )
      }
    </section>
  )
}

export default StudentCalendarSmall
