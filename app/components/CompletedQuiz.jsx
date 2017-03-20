import React from 'react'



const CompletedQuiz = ({ currentAssignment, quiz }) => {
    const quizAnswers = currentAssignment.quiz_answers
    console.log('quiz', quiz)
  return (
    <div className="quiz quiz-completed">
      {quiz.questions.map((question, indexNum) => {
        let questionNum = indexNum + 1;
        return (
          <div key={question.id} className="question-group">
            <h4 className="inquiry">{questionNum}. {question.inquiry}</h4>
            <ul className="inquiry-options">
              {question.answer.map((answer, idx) =>{
                let gotRight = +question.solution === +quizAnswers['q_'+question.id] && +question.solution === +idx
                console.log(gotRight)
                return (
                  <li key={answer} className="inquiry-option">
                      {answer}
                      {(+question.solution === +idx && !gotRight) ? <span className="answer answer-correct">Correct Answer</span> : null}
                      {(+quizAnswers['q_'+question.id] === +idx && !gotRight) ? <span className="answer answer-student-wrong">Your Answer</span> : null}
                      {(+quizAnswers['q_'+question.id] === +idx && gotRight) ? <span className="answer answer-student">Your Answer</span> : null}
                  </li>
                )
              })}

            </ul>
          </div>
        )
      })}

    </div>

  )
}

export default CompletedQuiz
