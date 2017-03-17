import React from 'react'

const StudentDashboard = ({user, assignments, teacher}) => {
  return (
		<div className="dashboard">
      <div className="container panel-container">
        <ul className="stats">
          <li className="stats-incomplete">
            <span className="icon icon-file-text"></span>
            <div className="info">
              <div className="quantity">00</div>
              <div className="type">To-Do</div>
            </div>
          </li>
          <li className="stats-new">
            <span className="icon icon-calendar-plus-o"></span>
            <div className="info">
              <div className="quantity">00</div>
              <div className="type">New</div>
            </div>
          </li>
          <li className="stats-complete">
            <span className="icon icon-calendar-check-o"></span>
            <div className="info">
              <div className="quantity">00</div>
              <div className="type">Completed</div>
            </div>
          </li>
          <li className="stats-rewards">
            <span className="icon icon-trophy"></span>
            <div className="info">
              <div className="quantity">0000</div>
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
              <div className="panel-header">
                <div>Calendar</div>
              </div>
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
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
                <li>
                  <div className="summary">
                    <h3 className="title">Title</h3>
                    <span className="snippet">Do this, this, and that beautifu...</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date">01/17</p>
                  </div>
                </li>
              </ul>
            </section> 
          </div>
        </div> 
      </div> 
    </div>   
   )
}

export default StudentDashboard
