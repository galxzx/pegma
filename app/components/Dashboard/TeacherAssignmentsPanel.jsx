import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

class TeacherAssignmentsPanel extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      sort: 'id',
      sortedAssignments: []
    }
    this.handleSortChange = this.handleSortChange.bind(this)
  }

  componentWillReceiveProps(props) {
    // this.setState({ sortedAssignments: [...props.assignments] })
  }

  handleSortChange(event) {
    let resortedAssignments = _.sortBy(this.state.sortedAssignments, event.target.value)
    this.setState({ sortedAssignments: resortedAssignments})
  }

  render() {
  	console.log(this.props)
	  return (
	    <section className="panel assignments">
	      <div className="panel-header">
	        <span>Assignments</span>
	        <div className="styled-select-filters">
	          <select value={this.state.sort} onChange={this.handleSortChange}>
              <option value="id">Sort by</option>
              <option value="due_date">Due Date</option>
              <option value="title">Title</option>
              <option value="student">Student</option>
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
}

export default TeacherAssignmentsPanel
