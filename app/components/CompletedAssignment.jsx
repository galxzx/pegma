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
              <strong>Name:</strong> {currentAssignment.student.user.name} <br/>
              <strong>Current Grade:</strong> {currentAssignment.grade ? currentAssignment.grade : 0}/100
              {user.teacher_id ? (
                <div>
                  <form onSubmit={(evt) => {
                    evt.preventDefault()
                    updateGrade(evt.target.grade.value, currentAssignment.id)
                  }}>
                    <label>New Grade</label>
                    <input name="grade" type="text" defaultValue={currentAssignment.grade} />
                    <button type="submit">Update and Archive</button>
                  </form>
                </div>
                ) : null
              }
            </div>
            <div>{currentAssignment.description}</div>
            {currentAssignment.type === 'quiz' ? <CompletedQuizContainer /> : null}
          </section>
          ) : (<div> Oops! This assignment doesn't belong to you </div>)
        }
      </div>
    </div>
  )
}

export default Assignment
