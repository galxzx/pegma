import React from 'react'
import { Link } from 'react-router'

const CalendarSmall = () => {

  return (
    <section className="panel calendar">
      <div className="panel-header">Calendar</div>
      <iframe className="calendar-content-sm" src="https://calendar.google.com/calendar/embed?src=pegmaproject%40gmail.com&amp;showTitle=0"></iframe>
    </section>
  )
}

export default CalendarSmall
