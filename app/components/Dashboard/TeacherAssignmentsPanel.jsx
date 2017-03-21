import React from 'react'
import { Link } from 'react-router'

const TeacherAssignmentsPanel = () => {

  return (
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
            <span className="student-name">Jane Doe</span>
          </div>
          <div className="due">
            <h4>Due</h4>
            <p className="date">01/17</p>
          </div>
        </li>
        <li>
          <div className="summary">
            <h3 className="title">Title</h3>
            <span className="student-name">Jane Doe</span>
          </div>
          <div className="due">
            <h4>Due</h4>
            <p className="date">01/17</p>
          </div>
        </li>
        <li>
          <div className="summary">
            <h3 className="title">Title</h3>
            <span className="student-name">Jane Doe</span>
          </div>
          <div className="due">
            <h4>Due</h4>
            <p className="date">01/17</p>
          </div>
        </li>
        <li>
          <div className="summary">
            <h3 className="title">Title</h3>
            <span className="student-name">Jane Doe</span>
          </div>
          <div className="due">
            <h4>Due</h4>
            <p className="date">01/17</p>
          </div>
        </li>
        <li>
          <div className="summary">
            <h3 className="title">Title</h3>
            <span className="student-name">Jane Doe</span>
          </div>
          <div className="due">
            <h4>Due</h4>
            <p className="date">01/17</p>
          </div>
        </li>
        <li>
          <div className="summary">
            <h3 className="title">Title</h3>
            <span className="student-name">Jane Doe</span>
          </div>
          <div className="due">
            <h4>Due</h4>
            <p className="date">01/17</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default TeacherAssignmentsPanel
