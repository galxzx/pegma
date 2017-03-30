
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { Link } from 'react-router'
import DueDate from '../containers/DueDateContainer'

const TeacherFunctions = ({students, library, handleSubmit, toggleCheckAll, due_date, handleChange, message}) => {

  const studentStats = (assignments) => {
    const stats = {
      'assigned':0,
      'doing':0,
      'completed':0,
      'archived':0
    }

    assignments.forEach(assignment => stats[assignment.status]++)

    return stats
  }

  return (
    <div className="dashboard dashboard-teacher">
      <div className="container panel-container functions">
        <div className="flex-container">
          <div className="flex-child panel">
            <div className="panel-header">New Assignments</div>
            <section  className="teacher-assignments">
              <p> Here you can give assignments to your students. You may use any assignment previously created or create your own tasks and quizzes.</p>
            </section>
            <section className="options">
              <Link to="/teacher/createtask"><button className="btn btn-primary">Create New Task</button></Link>
              <Link to="/teacher/createquiz"><button className="btn btn-primary">Create New Quiz</button></Link>
            </section>
          </div>
          <div className="flex-child panel">   
            <div className="panel-header">Existing Assignments</div>
            <section className="teacher-assignments">
              <p>Select a quiz and/or task to assign to students.</p>
              <form onSubmit={(evt) => handleSubmit(evt)}>
                <div className="flex-container">
                  <div className="flex-child">                 
                    <select id="tasks" name="tasks" className="normal full">
                      <option>Assign Task...</option>
                    {
                      library && library.tasks &&
                        library.tasks.map(task =>
                          <option
                            id={`task-${task.id}`}
                            key={task.id}
                            data-id={task.id}
                            data-title={task.title}>{task.title}
                          </option>
                        )
                    }
                    </select>
                  </div>
                  <div className="flex-child">                     
                    <select id="quizzes" name="quizzes" className="normal full">
                      <option>Assign Quiz...</option>
                    {
                      library && library.quizzes &&
                        library.quizzes.map(quiz =>
                          <option
                            id={`quiz-${quiz.id}`}
                            key={quiz.id}
                            data-id={quiz.id}
                            data-title={quiz.title}
                            >{quiz.title}
                          </option>
                        )
                    }
                    </select>
                  </div>
                </div>
                <div className="flex-container">
                    <div className="flex-child due-date-picker">                
                      <label>Due Date </label>
                      <DatePicker selected={ due_date } onChange={handleChange}  />
                    </div>
                    <div className="flex-child"> 
                      <label></label>                                                       
                      <button type="submit" className="btn btn-primary normal assign">Set Assignments</button>
                    </div>
                  </div>
              </form>
            </section>         
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-child panel">          
            <div className="panel-header">Select Students</div>            
            <section className="teacher-assignments">
              <h3 id="message-box">{ message }</h3>
              <table className="teacher-assignments">
                <tbody id="students">
                  <tr id="filters">
                    <th><input type="checkbox" onChange={(evt) => toggleCheckAll('#students', evt.target.checked)}/></th>
                    <th>ID</th>
                    <th>Last</th>
                    <th>First</th>
                    <th>Assigned</th>
                    <th>Doing </th>
                    <th>Completed </th>
                    <th>Archived </th>
                  </tr>
                {students.map((student) => {
                  let stats = studentStats(student.assignments)
                  return (
                    <tr key={student.id} className="student">
                      <td className="select"><input defaultValue={student.id} type="checkbox" /></td>
                      <td className="">{student.id}</td>
                      <td className="">{student.user.lastName}</td>
                      <td className="">{student.user.firstName}</td>

                      <td className="">{stats.assigned}</td>
                      <td className="">{stats.doing}</td>
                      <td className="">{stats.completed}</td>
                      <td className="">{stats.archived}</td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherFunctions
