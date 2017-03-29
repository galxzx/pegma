import React from 'react'

import GradeCircleContainer from '../containers/GradeCircleContainer'

const GradeView = ({studentId, studentName, GPA, studentReport, teacherName}) => {
  return (
		<div key="GradeView" className="">
       <div className="container panel-container">
         <section className="flex-child panel grade-view">

          <div className="panel-header">{`${studentName}'s Grade View`}</div>
          <br/>
            <div className="flex-container">
            { 
              studentReport && studentReport.map(item => (
                <div className={`flex-child subject ${item.subject}`} key={item.subject} id={`student${studentId}`}>
                  <div className="subject-title panel-header">{item.subject}</div>                  
                  <GradeCircleContainer 
                    studentId={studentId}
                    GPA={item.partialGrade} 
                    subject={item.subject}
                    numOfAs={item.spread.numOfAs}
                    numOfBs={item.spread.numOfBs}
                    numOfCs={item.spread.numOfCs}
                    numOfFs={item.spread.numOfFs}                
                  />
                </div>
              ))
            }  
            </div>
        </section>
      </div>
      <div className="container panel-container">

        <section className="flex-child panel reportcard" style={{marginTop: '0px'}}>
          <div className="panel-header">Report Card</div>
          <div className="reportcard-content">
            <div className="card">
              <h2>Student: {studentName}</h2>
              <h3>Teacher: {teacherName}</h3>
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
                    studentReport && studentReport.map((item, idx)=>{
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

export default GradeView
