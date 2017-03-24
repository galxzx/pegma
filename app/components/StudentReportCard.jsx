import React from 'react'

const StudentReportCard = ({user, assignments, teacher}) => {
  const reportCard = [];
  
  // CALCULATE GRADES
  assignments.forEach(assignment => {
    let instance;
    // Find out if it is a quiz or task
    if (assignment.quiz) instance = assignment.quiz
    else if (assignment.task) instance = assignment.task
    let subject = instance.subject
    // If subject object doesn't exist in Report Card, create a new one
    let subjectIndex = reportCard.findIndex((obj) => {
      return obj.subject == subject     
    })
    if (subjectIndex === -1) {
      let newSubject = {
        subject: subject,
        totalAssigments: 0,
        gradedAssignments: 0,
        partialGrade: 0,
        finalGrade: 0,
        totalGrade: 0
      }
      reportCard.push(newSubject);
      // Reassign index
      subjectIndex = reportCard.length - 1
    }
    reportCard[subjectIndex].totalAssigments++
    if (assignment.grade) {
      reportCard[subjectIndex].totalGrade += +assignment.grade
      reportCard[subjectIndex].gradedAssignments++
    }
    reportCard[subjectIndex].partialGrade = Math.round(reportCard[subjectIndex].totalGrade / reportCard[subjectIndex].gradedAssignments)
    if (isNaN(reportCard[subjectIndex].partialGrade)) reportCard[subjectIndex].partialGrade = 0
    reportCard[subjectIndex].finalGrade = Math.round(reportCard[subjectIndex].totalGrade / reportCard[subjectIndex].totalAssigments)

  })

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
