const validateQuiz = values => {
  const errors = {}
  if (!values.title) errors.title = 'Required'
  if (!values.subject) errors.subject = 'Required'
  if (!values.grade_level) errors.grade_level = 'Required'
  if (!values.description) errors.description = 'Please add a description'
  if (!values.questions || !values.questions.length) {
      errors.questions = {_error: 'Please add at least one question'}
  } else {
    const questionsArrayErrors = []
    values.questions.forEach((question, index) => {
      const questionErrors = {}
      if(!question || !question.inquiry){
        questionErrors.inquiry = 'Required'
        questionsArrayErrors[index] = questionErrors
      }
      if(!question || !question.a_0){
        questionErrors.a_0 = 'Required'
        questionsArrayErrors[index] = questionErrors
      }
      if(!question || !question.a_1){
        questionErrors.a_1 = 'Required'
        questionsArrayErrors[index] = questionErrors
      }
      if(!question || !question.a_2){
        questionErrors.a_2 = 'Required'
        questionsArrayErrors[index] = questionErrors
      }
      if(!question || !question.a_3){
        questionErrors.a_3 = 'Required'
        questionsArrayErrors[index] = questionErrors
      }
      if(!question || !question.solution){
        questionErrors.solution = 'Required'
        questionsArrayErrors[index] = questionErrors
      }

    })
    if(questionsArrayErrors.length) errors.questions = questionsArrayErrors
  }
  return errors
}


export default validateQuiz
