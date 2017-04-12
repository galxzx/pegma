import React from 'react'

import QuizContainer from '../containers/QuizContainer'
import TaskContainer from '../containers/TaskContainer'

const Assignment = ({user, currentAssignment}) => {
  return (
    <div className="dashboard">
    	<div className="container panel-container">
		      <section className="panel single-assignment">
		      	<div className="panel-header">{ currentAssignment.title }</div>
			      <div className="panel-subheader">Grade: {currentAssignment.grade ? Math.floor(currentAssignment.grade) : 0}/100</div>
			    </section>
          {currentAssignment.type === 'quiz' ? <QuizContainer /> : null }
          {currentAssignment.type === 'task' ? <TaskContainer /> : null }
	    </div>
    </div>
  )
}

export default Assignment
