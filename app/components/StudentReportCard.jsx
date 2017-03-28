import React from 'react'
import { getGrades } from '../utils'

const StudentReportCard = ({user, assignments, teacher}) => {
  const reportCard = getGrades(assignments);

  return (
    <div className="dashboard">
      <div className="container panel-container">

        <section className="flex-child panel reportcard">
          <div className="panel-header">Report Card</div>
          <div className="reportcard-content">
            <div className="card">
              <h2>Student: {user.firstName} {user.lastName}</h2>
              <h3>Teacher: {teacher.user.firstName} {teacher.user.lastName}</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="text">Subject</th>
                    <th>Graded Assignments</th>
                    <th>Total Assignments</th>
                    <th>Partial Grade *</th>
                    <th>Final Grade</th>
                  </tr>
                  {
                    reportCard && reportCard.map((item, idx)=>{
                      return (
                        <tr key={idx}>
                          <td className="text">{ item.subject }</td>
                          <td>{ item.gradedAssignments }</td>
                          <td>{ item.totalAssigments }</td>
                          <td>{ item.partialGrade }</td>
                          <td>{ item.finalGrade }</td>
                        </tr>
                      )    
                    })
                  }
                </tbody>
              </table>
              <p><small>* Average grade based only on graded assignments.</small></p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default StudentReportCard
