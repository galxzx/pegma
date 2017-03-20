import React from 'react'

const Assignment = ({user, currentAssignment, children}) => {
  return (
    <div className="dashboard">
    	<div className="container panel-container">
		      <section className="panel single-assignment">
		      	<div className="panel-header">{ currentAssignment.title }</div>
			      <div className="panel-subheader">Grade: {currentAssignment.grade ? currentAssignment.grade : 0}/100</div>
			      {children}
			    </section> 
	    </div>
    </div>
  )
}

export default Assignment
