import React from 'react'
import { Link } from 'react-router'

const TeacherCalendarSmall = ({calendar}) => {

	const calendarURL = `${calendar}&showTitle=0`

  return (
    <section className="panel calendar">
      <div className="panel-header">Calendar</div>
      {
      	calendar ? (
	      	<iframe className="calendar-content-sm" src={ calendarURL }></iframe>
	      ) : (
	      	<div className="calendar-content-sm">
	      		<p>You haven't set a google calendar for your students yet.</p>
	      		<button className="btn btn-primary">Add Calendar Link</button>
	      		</div>
	      )
      }
    </section>
  )
}

export default TeacherCalendarSmall
