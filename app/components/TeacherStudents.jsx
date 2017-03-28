
import React from 'react'
import {Link} from 'react-router'

import GradeCircleContainer from '../containers/GradeCircleContainer'

import {getGrades, GPA, letterSpread} from '../utils'

const TeacherStudents = ({user, students, dropStudentRequest}) => {

  const teacherName = user.firstName + ' ' + user.lastName

  return (
    <div className="dashboard dashboard-teacher">
      <div className="container panel-container functions">
        <div className="flex-container">
          <section className="flex-child panel">
            <div className="panel-header">{`${teacherName}'s`} Students</div>
            <table className="teacher-students fancy-colors">           
              <tbody id="students">
                <tr>
                  <th>ID</th>              
                  <th>Avatar</th>              
                  <th>Full Name</th>
                  <th>Grade</th>
                  <th>Manage Student</th>
                </tr>
                {
                  students.map((student) => {
                    let studentReport = getGrades(student.assignments)
                    let studentGPA = GPA(studentReport)
                    let studentLetterSpread = letterSpread(studentReport)                    
                    return (
                      <tr key={student.id} id={`student${student.id}`} className="student">
                        <td>{student.id}</td>
                        <td><img src={`${student.user.imageUrl}`} className="avatar" /></td>
                        <td>{student.user.lastName + ', ' + student.user.firstName}</td>
                        <td>
                          <Link to={`/teacher/student/${student.id}/grades`}>
                            <GradeCircleContainer 
                              studentId={student.id} 
                              GPA={studentGPA} 
                              numOfAs={studentLetterSpread.numOfAs}
                              numOfBs={studentLetterSpread.numOfBs}
                              numOfCs={studentLetterSpread.numOfCs}
                              numOfFs={studentLetterSpread.numOfFs}
                              />
                          </Link>
                        </td>                
                        <td className="options">
                          <a id="email" className="icon-mail tooltip" href={'mailto:' + student.user.email}>
                            <span className="tooltip-text">E-mail Student</span>
                          </a>
                          <Link id="tracker" className="icon-files tooltip" to={`/teacher/student/${student.id}`} >
                            <span className="tooltip-text">View Tracker</span>
                          </Link>
                          <a id="delete" className="icon-delete tooltip" onClick={() => dropStudentRequest(student.id)}>
                            <span className="tooltip-text">Drop Student</span>
                          </a>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div className="options">
              <p>If you can't find a student, you may look for all students that don't have a teacher assigned and add him/her to your class.</p>
              <Link to='/teacher/claim'><button className="btn btn-primary">Adds Students to Classroom</button></Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TeacherStudents
