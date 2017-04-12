import React from 'react'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import _ from 'lodash'

import DueDate from '../containers/DueDateContainer'

const TeacherFunctions = ({students, library, handleSubmit, toggleCheckAll, due_date, handleDateChange, handleSelectTask, handleSelectQuiz, handleSelectStudent, allTasks, allQuizzes, message}) => {

  const studentStats = (assignments) => {
    const stats = {
      'assigned': 0,
      'doing': 0,
      'completed': 0,
      'archived': 0
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="flex-container">
                  <div className="flex-child">                 
                    <select id="tasks" name="tasks" className="normal full" onChange={handleSelectTask}>
                      <option id='0'>Assign Task...</option>
                    {
                      allTasks && allTasks.map(task =>
                        <option
                          key={`quiz-${task.id}`}
                          value={task.id}
                          >{task.title}
                        </option>
                        )
                    }
                    </select>
                  </div>
                  <div className="flex-child">                     
                    <select id="quizzes" name="quizzes" className="normal full" onChange={handleSelectQuiz}>
                      <option id='0'>Assign Quiz...</option>
                    {
                      allQuizzes && allQuizzes.map(quiz =>
                        <option
                          key={`quiz-${quiz.id}`}
                          value={quiz.id}
                          >{quiz.title}
                        </option>
                      )
                    }
                    </select>
                  </div>
                </div>
                <div className="flex-container">
                    <div className="flex-child due-date-picker">                
                      <label>Due Date </label><br />
                      <DatePicker selected={ due_date } onChange={ handleDateChange }  />
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
                    <th><input type="checkbox" onChange={(event) => toggleCheckAll('#students', event.target.checked)}/></th>
                    <th className="text">Last Name</th>
                    <th className="text">First Name</th>
                    <th>Assigned</th>
                    <th>Doing </th>
                    <th>Completed </th>
                    <th>Archived </th>
                  </tr>
                {students.map((student) => {
                  let stats = studentStats(student.assignments)
                  return (
                    <tr key={student.id} className="student table">
                      <td className="select"><input value={ student.id } type="checkbox"/></td>
                      <td className="text">{ student.user.lastName }</td>
                      <td className="text">{ student.user.firstName }</td>
                      <td className="number">{ stats.assigned }</td>
                      <td className="number">{ stats.doing }</td>
                      <td className="number">{ stats.completed }</td>
                      <td className="number">{ stats.archived }</td>
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
