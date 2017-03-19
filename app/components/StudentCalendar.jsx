import React from 'react'

const StudentCalendar= ({user, assignments}) => {
  return (
    <div className="dashboard">
        <div className="container panel-container">

            <section className="flex-child panel-calendar">
                <div className="panel-header">Calendar</div>
                <iframe className="calendar-content-max" src="https://calendar.google.com/calendar/embed?src=pegmaproject%40gmail.com&amp;showTitle=0"></iframe>
            </section>

        </div>

      </div>
  )
}

export default StudentCalendar
