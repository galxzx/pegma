import React from 'react'
import { Field, reduxForm } from 'redux-form'

const TeacherFunctions = ({students, library, handleSubmit}) => {
  return ( 
    <div>
      <div className="flex-container">
        <section className="flex-child panel functions">
          <div className="panel-header">Teacher Functions</div>          
        </section>
      </div>

      <div className="flex-container">
        <div className="teacher-functions">

          <form className="" onSubmit={(evt) => handleSubmit(evt)}> 
            <select id="tasks" name="tasks">
              <option>Assign Task...</option>
            {
              library && library.tasks &&
                library.tasks.map(task => 
                  <option 
                    id={`task-${task.id}`}
                    key={task.id} 
                    data-title={task.title} 
                    data-id={task.id}>{task.title}
                  </option>
                )
            }
            </select>
            <button type="submit">Assign Task</button>
          </form>

          <select>
            <option>Assign Quiz...</option>          
          {
            library && library.quizzes &&
              library.quizzes.map(quiz => <option key={quiz.id} value={quiz.id}>{quiz.title}</option>)
          }          </select>                      
        </div>  
      </div>

      <div className="flex-container">          
        <table className="student-list">
          <tbody>         
            <tr id="filters">
              <th><input type="checkbox" /></th>          
              <th>ID</th>          
              <th>Full Name</th>          
              <th>info </th>          
              <th>info </th>          
              <th>info </th>          
            </tr>          
          {students.map((student) => {
            return (
              <tr key={student.id} className="">
                <td className="centered"><input type="checkbox" /></td>            
                <td className="">{student.id}</td>
                <td className="">{student.user.name}</td>
                <td className="">{student.name}</td>            
                <td className="">{student.name}</td>            
                <td className="">{student.name}</td>            
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeacherFunctions
