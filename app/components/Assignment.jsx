import React from 'react'

const Assignment = ({user, currentAssignment, children}) => {
  return (
    <div>
      <div>{currentAssignment.title}</div>
      <div>Grade: {currentAssignment.Grade}</div>
      {children}
    </div>
  )
}

export default Assignment
