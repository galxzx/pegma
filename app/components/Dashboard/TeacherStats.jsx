import React from 'react'
import { Link } from 'react-router'

const TeacherStats = ({students}) => {
  let readyToGrade = 0
  let selfGraded = 0
  let totalAssignments = 0
  let totalStudents = 0

  students.forEach(student => {
    totalStudents++
    student.assignments.forEach(assignment => {
      totalAssignments++
      if (assignment.type === 'quiz' && assignment.grade) selfGraded++
      if (assignment.type === 'task' && assignment.status === 'completed') readyToGrade++
    })
  })

  return (
    <ul className="stats">
      <li className="stats-ready">
        <span className="icon icon-file-alert"></span>
        <div className="info">
          <div className="quantity">{ readyToGrade }</div>
          <div className="type">Ready to Grade</div>
        </div>
      </li>
      <li className="stats-selfgraded">
        <span className="icon icon-file-check"></span>
        <div className="info">
          <div className="quantity">{ selfGraded }</div>
          <div className="type">Self Graded</div>
        </div>
      </li>
      <li className="stats-totalassignments">
        <span className="icon icon-files"></span>
        <div className="info">
          <div className="quantity">{ totalAssignments }</div>
          <div className="type">Total Assignments</div>
        </div>
      </li>
      <li className="stats-totalstudents">
        <span className="icon icon-graduation-cap"></span>
        <div className="info">
          <div className="quantity">{ totalStudents }</div>
          <div className="type">Total Students</div>
        </div>
      </li>
    </ul>
   )
}

export default TeacherStats
