
import React from 'react'
import {Link} from 'react-router'

const TeacherStudents = ({user, students}) => {

  const teacherName = user.firstName + ' ' + user.lastName

  return (
    <div>

      <div className="flex-container">
        <section className="flex-child panel">
          <div className="panel-header">{`${teacherName}'s`} Students</div>
        </section>
      </div>

      <div className="flex-container">
        <table className="teacher-students fancy-colors">           
          <tbody id="students">
            <tr>
              <th>ID</th>              
              <th>Avatar</th>              
              <th>Full Name</th>
              <th>Grade</th>
              <th>Manage Student</th>
            </tr>
          {students.map((student) => {
            console.log(student.user.imageUrl)
            return (
              <tr key={student.id} className="student">
                <td className="">{student.id}</td>
                <td className="avatar"><img src={`${student.user.imageUrl}`} className="avatar" /></td>
                <td className="">{student.user.lastName + ', ' + student.user.firstName}</td>
                <td className=""></td>                
                <td className="options">
                  <a className="icon-star" href={'mailto:' + student.user.email}></a>
                  <Link to={`/teacher/student/${student.id}`} className="icon-clipboard"></Link>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeacherStudents
