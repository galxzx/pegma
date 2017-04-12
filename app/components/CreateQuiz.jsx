import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

import RenderField from './RenderField'
import renderQuestions from './CreateQuestions'

const renderError = ({ meta: { touched, error } }) => touched && error && <span className="icon icon-error-circle red"> {error}</span> || null

const renderTextArea = ({input, label, type,  meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder="Content" rows="10" cols="40"/><br/>
            {touched && ((error && <span className="icon icon-error-circle red">{error}</span>) || (warning && <span className="icon icon-error-circle red">{warning}</span>))}
        </div>
    </div>
)

const createQuiz = ({handleSubmit, submitting, addQuiz}) => {
  return (
    <div className="dashboard">
      <div className="container panel-container">

        <div className="flex-container">

          <section className="flex-child panel creator">
            <div className="panel-header">Create New Quiz</div>
            <div className="creator-content">
              <form onSubmit={handleSubmit(addQuiz)}>
                <fieldset>
                  <div className="form-group">
                    <Field name="title" type="text" component={RenderField} label="Title"/>
                    <div>
                      <label>Subject </label>
                        <Field name="subject" component="select">
                          <option></option>
                          {['Math', 'Science', 'History', 'English', 'Reading', 'Writing'].map(subject =>
                            (
                              <option key={subject} value={subject}>{subject}</option>
                            )
                          )}
                        </Field>
                        <Field name="subject" component={renderError} />
                    </div>
                    <div>
                      <label>Grade Level </label>
                        <Field name="grade_level" component="select">
                          <option></option>
                          {[1,2,3,4,5,6,7,8,9,10,11,12].map(level =>
                            (
                              <option key={level} value={level}>{level}</option>
                            )
                          )}
                        </Field>
                        <Field name="grade_level" component={renderError} />
                    </div>
                    <Field name="description" type="textarea" component={renderTextArea} label="Description"/>
                    <FieldArray name="questions" component={renderQuestions} />
                    <div className="nav">
                      <button type="submit" disabled={submitting} className="btn btn-primary">Create Quiz</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}

export default createQuiz
