import React from 'react'
import CompletedQuizContainer from '../containers/CompletedQuizContainer'

const Assignment = ({user, currentAssignment, updateGrade}) => {
  return (
    <div className="dashboard">
      <div className="container panel-container">
        { (user.teacher_id || user.student_id)
          && (user.teacher_id && user.teacher_id === currentAssignment.teacher_id)
          ||(user.student_id && user.student_id === currentAssignment.student_id )
          ? (
          <section className="panel single-assignment">
            <div className="panel-header">{ currentAssignment.title }</div>
            <div className="panel-subheader">
              <strong>Name:</strong> {currentAssignment.student.user.firstName + ' ' + currentAssignment.student.user.lastName} <br/>
              <strong>Current Grade:</strong> {currentAssignment.grade ? Math.floor(currentAssignment.grade) : 0}/100
              {user.teacher_id ? (
                <div>
                  <form onSubmit={(evt) => {
                    evt.preventDefault()
                    updateGrade(evt.target.grade.value, evt.target.status.value, currentAssignment.id)
                  }}>
                    <label>New Grade</label>
                    <input name="grade" type="text" defaultValue={currentAssignment.grade} />
                    <select name="status" defaultValue={currentAssignment.status}>
                      <option value="archived">archived</option>
                      <option value="completed">completed</option>
                      <option value="doing">doing</option>
                      <option value="assigned">assigned</option>
                    </select>
                    <button className="btn btn-primary" type="submit">Update</button>
                  </form>
                </div>
                ) : null
              }
            </div>
            <div className="quiz-completed-description">{currentAssignment.description}</div>
            {currentAssignment.type === 'quiz' ? <CompletedQuizContainer /> : null}
          </section>
          ) : (<div> Oops! This assignment doesn't belong to you </div>)
        }
      </div>
    </div>
  )
}

export default Assignment
