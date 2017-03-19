import React from 'react'

const StudentDashboard = ({user, assignments, teacher}) => {
  let totalToDo = 0
  let totalNew = 0
  let totalCompleted = 0
  let totalRewards = 0

  assignments.forEach(assignment => {
    // Group totals
    if (assignment.status === 'completed') {
      totalCompleted++
      // Count rewards
      totalRewards += assignment.reward
    }
    else if (assignment.status === 'future') {
      totalNew++
      totalToDo++
    }
    else {
      totalToDo++
    }
  })

  return (
		<div className="dashboard">
      <div className="container panel-container">
        <ul className="stats">
          <li className="stats-incomplete">
            <span className="icon icon-file-text"></span>
            <div className="info">
              <div className="quantity">{ totalToDo }</div>
              <div className="type">To-Do</div>
            </div>
          </li>
          <li className="stats-new">
            <span className="icon icon-calendar-plus-o"></span>
            <div className="info">
              <div className="quantity">{ totalNew }</div>
              <div className="type">New</div>
            </div>
          </li>
          <li className="stats-complete">
            <span className="icon icon-calendar-check-o"></span>
            <div className="info">
              <div className="quantity">{ totalCompleted }</div>
              <div className="type">Completed</div>
            </div>
          </li>
          <li className="stats-rewards">
            <span className="icon icon-trophy"></span>
            <div className="info">
              <div className="quantity">{ totalRewards }</div>
              <div className="type">Reward Points</div>
            </div>
          </li>
        </ul>

        <div className="flex-container">

          <div className="flex-child">

            <section className="panel notifications">
              <div className="panel-header">Notifications</div>
              <ul className="notifications-list">
                <li className="overdue">Assignment X is overdue.<span className="icon icon-external-link-sqaure"></span></li>
                <li>Assignment Y graded.<span className="icon icon-external-link-sqaure"></span></li>
                <li>New Assigment Z added.<span className="icon icon-external-link-sqaure"></span></li>
                <li>New Assigment W added.<span className="icon icon-external-link-sqaure"></span></li>
                <li>New Assigment W added.<span className="icon icon-external-link-sqaure"></span></li>
                <li>Assignment H graded.<span className="icon icon-external-link-sqaure"></span></li>
              </ul>
            </section> 

            <section className="panel calendar">
              <div className="panel-header">Calendar</div>
              <iframe className="calendar-content-sm" src="https://calendar.google.com/calendar/embed?src=pegmaproject%40gmail.com&amp;showTitle=0"></iframe>
            </section>
          </div>

          <div className="flex-child">

            <section className="panel assignments">
              <div className="panel-header">
                <span>Assignments</span>
                <div className="styled-select-filters">
                  <select name="sort_assignments">
                    <option value="" selected>Sort by</option>
                    <option value="duedate">Due Date</option>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                  </select>
                </div>
              </div>
              <ul className="assignments-list">
                {
                  (assignments.length > 0) ? 
                    assignments.map((assignment, i) => {
                    let dueDate = `${assignment.due_date.substring(5,7)}/${assignment.due_date.substring(8,10)}`
                    let snippet = assignment.description
                    if (snippet.length > 40) snippet = `${snippet.substring(0,41)}...`
                    
                    return (
                      <li key={ i }>
                        <div className="summary">
                          <h3 className="title">{ assignment.title }</h3>
                          <span className="snippet">{ snippet }</span>
                        </div>
                        <div className="due">
                          <h4>Due</h4>
                          <p className="date"> { dueDate }</p>
                        </div>
                      </li>
                    )
                  }) :
                    <li>No assignments to display.</li>
                }

              </ul>
            </section> 
          </div>
        </div> 
      </div> 
    </div>   
   )
}

export default StudentDashboard
