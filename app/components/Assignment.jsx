import React from 'react'

const Assignment = ({user, currentAssignment, children}) => {
  return (
    <div>
      <div>Assignment </div>
      {children}
    </div>
  )
}

export default Assignment
