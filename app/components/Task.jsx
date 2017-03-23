import React from 'react'

const Task = ({task}) => {
  return (
    <div key="Assignment" className="dashboard">
      <div className="container panel-container">
          <section className="panel single-assignment">
            <div className="panel-header">{ task.topic }</div>
            <div className="panel-subheader">{ task.subject}</div>
            <p>{task.description}</p>
          </section>

      </div>
    </div>
  )
}

export default Task
