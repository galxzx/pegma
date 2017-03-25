
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
            <div className="panel-header">Rewards Panel</div>
            <section className="">
              <h2>Coming soon.</h2>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherFunctions
