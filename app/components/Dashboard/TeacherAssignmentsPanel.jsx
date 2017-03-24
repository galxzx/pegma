import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

class TeacherAssignmentsPanel extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      sort: 'id',
      filter: '',
      sortedAssignments: [],
      allAssignments: []
    }
    this.handleSortChange = this.handleSortChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  componentWillMount(props) {

    let allStudents = [...this.props.students]
    let allStudentsAssignments = []

    allStudents.forEach(student => { 
    	student.assignments.forEach(assignment => {
    		assignment.studentName = `${student.user.firstName} ${student.user.lastName}`;
    		allStudentsAssignments.push(assignment);
    	})
    })
    this.setState({ allAssignments: allStudentsAssignments })
    this.setState({ sortedAssignments: allStudentsAssignments })
  }

  handleFilterChange(event) {
  	let val = event.target.value
  	let refilteredAssignments
  	if (val === 'all') {
  		refilteredAssignments = this.state.allAssignments
  	} else {
  		if (val === 'task') val = (o) => o.type == 'task'
  		else if (val === 'quiz') val = (o) => o.type == 'quiz'
			else if (val === 'assigned') val = (o) => o.status == 'assigned'
			else if (val === 'assigned') val = (o) => o.status == 'completed'
			else if (val === 'assigned') val = (o) => o.status == 'archived'
			else if (val === 'assigned') val = (o) => o.overdue

	    refilteredAssignments = _.filter(this.state.allAssignments, val)
  	}
    this.setState({ sortedAssignments: refilteredAssignments, filter: val})
  }

  handleSortChange(event) {
    let resortedAssignments = _.sortBy(this.state.sortedAssignments, event.target.value)
    this.setState({ sortedAssignments: resortedAssignments, sort: event.target.value })
  }

  render() {
  	const allAssignments = this.state.sortedAssignments
  	
	  return (
	    <section className="panel assignments">
	      <div className="panel-header">
	        <span>Assignments</span>
	        <div className="styled-select-filters">
	        	<select value={this.state.filter} onChange={this.handleFilterChange}>
              <option value="filter">Filter by</option>
              <option value="all">Show all</option>
              <option value="task">Tasks</option>
              <option value="quiz">Quizzes</option>
              <option value="assigned">Assigned</option>
              <option value="completed">Completed</option>
              <option value="archived">Archived</option>
              <option value="overdue">Overdue</option>
            </select>
	          <select value={this.state.sort} onChange={this.handleSortChange}>
              <option value="id">Sort by</option>
              <option value="due_date">Due Date</option>
              <option value="title">Title</option>
              <option value="studentName">Student</option>
            </select>
	        </div>
	      </div>
	      <ul className="assignments-list">
	      	{
	      		(allAssignments.length) ? 
	      			allAssignments.map((assignment, i) => {

	      				let type = `${assignment.type[0].toUpperCase()}${assignment.type.substring(1)}`

	      				return (
	      					<Link key={assignment.id}>
		      					<li>
						          <div className="summary">
						            <h3 className="title">{ assignment.title }  <small><i>{ type }</i></small></h3>
						            <span className="student-name">{ assignment.overdue ? <span className="red"><i>Overdue</i></span> : null} { assignment.studentName } ({ assignment.status })</span>
						          </div>
						          <div className="due">
						            <h4>Due</h4>
						            <p className="date">{ assignment.formattedDate }</p>
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

export default TeacherAssignmentsPanel
