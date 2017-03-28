import React from 'react'

const StudentCalendar= ({user, teacher}) => {

  const calendarURL = `${teacher.calendar}&showTitle=0`

  return (
    <div  key="StudentCalendar" className="dashboard">
      <div className="container panel-container">

        <section className="flex-child panel-calendar">
            <div className="panel-header">Calendar</div>
            {
              teacher && teacher.calendar ? (
                <iframe className="calendar-content-max" src={ calendarURL }></iframe>
              ) : (
                <div className="calendar-content-max"><p>Your teacher hasn't set a calendar yet.</p></div>
              )
            }
        </section>

      </div>
    </div>
  )
}

export default StudentCalendar
