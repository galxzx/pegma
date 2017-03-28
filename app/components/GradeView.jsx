import React from 'react'

import GradeCircleContainer from '../containers/GradeCircleContainer'

const GradeView = ({studentId, studentName, GPA, studentReport}) => {
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
    </div>
   )
}

export default GradeView
