import React from 'react'



const CompletedQuiz = ({ currentAssignment, quiz }) => {
    const quizAnswers = currentAssignment.quiz_answers
    console.log('quiz', quiz)
  return (
    <div>
      <div>Grade: {currentAssignment.grade} </div>
      {quiz.questions.map(question => {
        return (
          <div key={question.id}>
            <h4>{question.inquiry}</h4>
            <div>
              {question.answer.map((answer, idx) =>{
                return (
                  <div key={answer} >
                      {answer}
                      {+question.solution === +idx ? <span> *Correct Answer</span> : null}
                      {+quizAnswers['q_'+question.id] === +idx ? <span> *Your Answer</span> : null}
                  </div>
                )
              })}

            </div>
          </div>
        )
      })}

    </div>

  )
}

export default CompletedQuiz
