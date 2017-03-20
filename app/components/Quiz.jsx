import React from 'react'
import { Field, reduxForm } from 'redux-form'

import RenderField from './RenderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const required = value => (value || value === 0) ? undefined : 'Required'


const Quiz = ({ handleSubmit, quiz, gradeQuiz, quizForm }) => {
  console.log('form data', quizForm)
  return (
    <form onSubmit={handleSubmit(gradeQuiz)}>
      {quiz.questions.map(question => {
        return (
          <div key={question.id}>
            <h4>{question.inquiry}</h4>
            <div>
              {question.answer.map((answer, idx) =>{
                return (
                  <div key={answer}>
                    <label>
                      <Field name={'q_'+question.id} component="input" type="radio" value={idx} checked={quizForm && quizForm.values['q_'+question.id] == idx} />
                      {answer}
                    </label>
                  </div>
                )
              })}
              <Field name={'q_'+question.id} component={renderError} validate={required} />
            </div>
          </div>
        )
      })}
      <div>
        <button type="submit">Submit Quiz</button>
      </div>
    </form>

  )
}

export default Quiz
