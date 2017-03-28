import React from 'react'
import {Link} from 'react-router'

const UnclaimedStudents = ({unclaimedStudents}) => {

  console.log(unclaimedStudents)
  const students = unclaimedStudents;

  return (
    <div className="dashboard dashboard-teacher">
      <div className="container panel-container functions">
        <div className="flex-container">
          <section className="flex-child panel">
            <div className="panel-header">Add Students</div>
            <table className="teacher-students fancy-colors">           
              <tbody id="students">
                <tr>
                  <th>ID</th>              
                  <th>Avatar</th>              
                  <th>Full Name</th>
                  <th>Add to My Class</th>
                </tr>
                {
                  students.map((student) => {
                    return (
                      <tr key={student.id} className="student">
                        <td className="">{student.id}</td>
                        <td className="avatar"><img src={`${student.user.imageUrl}`} className="avatar" /></td>
                        <td className="">{student.user.lastName + ', ' + student.user.firstName}</td>                
                        <td className="options">
                          <a id="email" className="icon-plus-circle" href={'mailto:' + student.user.email}></a>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  )
}

export default UnclaimedStudents




