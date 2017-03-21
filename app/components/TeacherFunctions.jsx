import React from 'react'
import { Field, reduxForm } from 'redux-form'

const TeacherFunctions = ({students, library, handleSubmit}) => {
  return (
    <form className="teacher-functions" onSubmit={handleSubmit()}>
      <div>
        <button className="btn btn-primary" type="submit">Assign Tasks</button>
      </div>     
      <table>
        <tr>
          <th></th>
          <th></th>          
        </tr>
      {students.map((student) => {
        return (
          <tr key={student.id} className="">
            <td className="">student.id</td>
            <td className="">student.name</td>            
          </tr>
        )
      })}
      </table>
    </form>

  )
}

export default TeacherFunctions
