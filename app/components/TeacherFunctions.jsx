
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { Link } from 'react-router'
import DueDate from '../containers/DueDateContainer'


const TeacherFunctions = ({students, library, handleSubmit, toggleCheckAll, due_date, handleChange}) => {
  return (
    <div>
      <div className="flex-container">
        <section className="flex-child panel">
          <div className="panel-header">Teacher Functions</div>
          <div className="panel-subheader">
            <Link to="/teacher/createtask"><button>Make New Task</button></Link>
            <Link to="/teacher/createquiz"><button>Make New Quiz</button></Link>
          </div>
        </section>
      </div>

      <div className="flex-container">
        <div className="teacher-assignments">

          <form className="" onSubmit={(evt) => handleSubmit(evt)}>
            <select id="tasks" name="tasks">
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

            <select id="quizzes" name="quizzes">
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

            <label>Due Date</label>
            <DatePicker selected={ due_date } onChange={handleChange} />

            <button type="submit">Assign Task</button>


            <span id="message-box"></span>

          </form>
        </div>
      </div>

      <div className="flex-container">
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
            return (
              <tr key={student.id} className="student">
                <td className="select"><input defaultValue={student.id} type="checkbox" /></td>
                <td className="">{student.id}</td>
                <td className="">{student.user.lastName}</td>
                <td className="">{student.user.firstName}</td>
                <td className="">{student.studentStats.assigned}</td>
                <td className="">{student.studentStats.doing}</td>
                <td className="">{student.studentStats.completed}</td>
                <td className="">{student.studentStats.archived}</td>
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
