import React from 'react'
import { Field, reduxForm } from 'redux-form'


const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const required = value => (value || value === 0) ? undefined : 'Required'

const Quiz = ({ handleSubmit, quiz, gradeQuiz, quizForm, user }) => {
  return (
    <form className="quiz" onSubmit={handleSubmit(gradeQuiz)}>
      {quiz.questions.map((question, indexNum) => {
        let questionNum = indexNum + 1;
        return (
          <div key={question.id} className="question-group">
            <h4 className="inquiry">{questionNum}. {question.inquiry}</h4>
            <ul className="inquiry-options">
              {question.answer.map((answer, idx) =>{
                return (
                  <li key={answer} className="inquiry-option">
                    <label>
                      <Field name={'q_'+question.id} component="input" type="radio" value={idx} checked={quizForm && quizForm.values && quizForm.values['q_'+question.id] == idx} />
                      {answer}
                    </label>
                  </li>
                )
              })}
              <Field name={'q_'+question.id} component={renderError} validate={required} />
            </ul>
          </div>
        )
      })}
      <div>
        <button className="btn btn-primary" type="submit" disabled={user.teacher_id}>Submit Quiz</button>
      </div>
    </form>

  )
}

export default Quiz
