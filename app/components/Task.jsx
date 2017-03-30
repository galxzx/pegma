import React from 'react'

const Task = ({task}) => {
  return (
    <div className="task">
      <div className="topic"><b>Topic:</b> { task.topic }</div>
      <div className="subject"><b>Subject:</b> { task.subject}</div>
      <div className="body">
        <p>{task.description}</p>
      </div>
    </div>
  )
}

export default Task
