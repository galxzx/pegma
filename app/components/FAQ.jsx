import React from 'react'

const FAQ = () => {

  const questions = [
  {q: 'How do I add students to my classroom?',
    a: 'Your students should sign up for a student account and select you for a teacher'},
  {q: 'How do I give my students new assignments?', a: 'From the teacher dashboard, you can click on assignments in the toolbar.\nOnce there, select the task or quiz and the students you would like to apply it to and click "Assign Task"'},
  {q: 'What is a Task?',
    a: 'A task is a type of assignment to be turned in outside of the PEGMA platform.\n Students can indicate that the task is complete and ready for grading by dropping the assignment into the "Completed" lane of their Assignment board.\n Teachers can add a grade to the assignment by selecting that assignment from anywhere inside the teacher view.'},
  {q: 'What is a Quiz?',
    a: 'A Quiz is a self graded multiple choice quiz.\nTeachers can modify the grade by selecting the completed quiz.'},
  {q: 'How do I make new Tasks?',
    a: 'From the Assignments panel, click on "Create New Task" and complete the form. Once the task is created, it will be available on the Assignments Panel'},
  {q: 'How do I create a new Quiz?',
    a: 'From the Assignments panel, click on "Create New Quiz." In the new quiz form, you may add as many multiple choice questions that you like. Each question must have four choices and only one correct answer. Once the quiz is created, it will be available on the Assignments panel'

  }]

  return (
      <div className="dashboard dashboard-teacher">
        <div className="container panel-container functions">
          <div className="flex-container">
            <section className="flex-child panel">
              <div className="panel-header">Frequently Asked Questions</div>
              {questions.map(question => {
                return (
                  <div key={question.q} className="container panel-container">
                    <div className="flex-container">
                      <section className="flex-child panel">
                        <div className="panel-header">{question.q}</div>
                        <div className="answer">{question.a}</div>
                      </section>
                    </div>
                  </div>
                )
              })}
            </section>
          </div>
        </div>
      </div>
    )

}

export default FAQ
