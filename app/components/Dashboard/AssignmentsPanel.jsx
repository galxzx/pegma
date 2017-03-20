import React from 'react'
import { Link } from 'react-router'

const AssignmentsPanel = ({assignments}) => {

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
        {
          (assignments.length > 0) ?
            assignments.map((assignment, i) => {

            let type = `${assignment.type[0].toUpperCase()}${assignment.type.substring(1)}`

            return (
              <Link to={`/student/assignment/${assignment.id}`} key={ assignment.id } >
                <li>
                  <div className="summary">
                    <h3 className="title">{ assignment.title }</h3>
                    <span className="snippet">{ type } - { assignment.snippet }</span>
                  </div>
                  <div className="due">
                    <h4>Due</h4>
                    <p className="date"> { assignment.formattedDate }</p>
                  </div>
                </li>
              </Link>
            )
          }) :
            <li>No assignments to display.</li>
        }

      </ul>
    </section>
  )
}

export default AssignmentsPanel
