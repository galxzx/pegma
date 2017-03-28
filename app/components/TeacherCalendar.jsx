import React from 'react'
import { Field } from 'redux-form'

const TeacherCalendar= ({calendar, handleSubmit, updateCalendar}) => {
  
  const calendarURL = `${calendar}&showTitle=0`
  // Creates email placeholder
  let email = 'Type your Google calendar gmail here.'
  if (calendar) {
    let index = calendar.indexOf('src=') + 4;
    email = calendar.substring(index).replace('%40', '@');
  }

  return (
    <div className="dashboard">
      <div className="container panel-container">

        <section className="flex-child panel-calendar">
            <div className="panel-header">Calendar</div>
            <form onSubmit={handleSubmit(updateCalendar)}>
              <fieldset>
                <p>Here you may add a google calendar link which will be available to all of yoru students.</p>
                <ul>
                  <li>Go to your google calendar.</li>
                  <li>Go to Settings (gear icon on the top right corner).</li>
                  <li>Click on Calendars Tab.</li>
                  <li>Find the calendar you wish to use and click on Shared: Edit settings</li>
                  <li>Select 'Make this calendar public', then click Save.</li>
                  <li>Now, all you have to do is to type your google calendar gmail in the field bellow</li>
                </ul>
                <Field className="calendar-email" type="email" name="email" component="input" placeholder={email}/> <button type="submit" className="btn btn-primary">Add/Update Calendar</button>
              </fieldset>
            </form>
            {
              calendar ? (
                <iframe className="calendar-content-max" src={ calendarURL }></iframe>
              ) : (
                <div className="calendar-content-max"><p>You haven't set a google calendar for your students yet.</p></div>
              )
            }
        </section>

      </div>
    </div>
  )
}

export default TeacherCalendar


// https://calendar.google.com/calendar/embed?src=pegmaproject%40gmail.com