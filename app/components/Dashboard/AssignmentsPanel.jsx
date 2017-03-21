import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

class AssignmentsPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: 'id',
      sortedAssignments: []
    }
    this.handleSortChange = this.handleSortChange.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({ sortedAssignments: [...props.assignments] })
  }

  handleSortChange(event) {
    let resortedAssignments = _.sortBy(this.state.sortedAssignments, event.target.value)
    this.setState({ sortedAssignments: resortedAssignments})
  }

  render() {
    const assignments = this.state.sortedAssignments
  
    return (
      <section className="panel assignments">
        <div className="panel-header">
          <span>Assignments</span>
          <div className="styled-select-filters">
            <select value={this.state.sort} onChange={this.handleSortChange}>
              <option value="id">Sort by</option>
              <option value="due_date">Due Date</option>
              <option value="title">Title</option>
              <option value="type">Type</option>
            </select>
          </div>
        </div>
        <ul className="assignments-list">
          {
            (assignments.length) ?
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
}

export default AssignmentsPanel
