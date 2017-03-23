const db = require('APP/db')

 // {name: 'Geoff Bass', email: 'geoff.bass@example.com', password: '1234'},
 //  {name: 'Freda Nada', email: 'freda.nada@example.com', password: '1234'},
 //  {name: 'Andrew Gionfriddo', email: 'andrew.gionfriddo@example.com', password: '1234'}
const User = db.model('users')
const Question = db.model('questions')
const seedTeachers = () => db.Promise.map([
  {id: 1, user: {firstName: 'Geoff', lastName: 'Bass', email: 'geoff.bass@example.com', password: '1234'}},
  {id: 2, user: {firstName: 'Freda', lastName: 'Nada', email: 'freda.nada@example.com', password: '1234'}},
  {id: 3, user: {firstName: 'Andrew', lastName: 'Gionfriddo', email: 'andrew.gionfriddo@example.com', password: '1234'}}
], teacher => db.model('teachers').create(teacher, {include:[User]}))

const seedStudents = () => db.Promise.map([
  {id: 1, user: {firstName: 'Cody', lastName: 'the dog', email: 'cody@example.com', password: '1234'}, teacher_id: 1},
  {id: 2, user: {firstName: 'Corryn', lastName: 'Young', email: 'corryn.young@example.com', password: '1234'}, teacher_id: 1},
  {id: 3, user: {firstName: 'Jonathan', lastName: 'Mann', email: 'jonathan.mann@example.com', password: '1234'}, teacher_id: 1},
  {id: 4, user: {firstName: 'Fabiano', lastName: 'Pires da Silva', email: 'fabiano.piresdasliva@example.com', password: '1234'}, teacher_id: 1},
  {id: 5, user: {firstName: 'Aaron', lastName: 'Aichlmayr', email: 'aaron.aichlmayr@example.com', password: '1234'}, teacher_id: 1},
  {id: 6, user: {firstName: 'Jason', lastName: 'Lam', email: 'jason.lam@example.com', password: '1234'}, teacher_id: 1},
  {id: 7, user: {firstName: 'Jason', lastName: 'Powell', email: 'jason.powell@example.com', password: '1234'}, teacher_id: 1},
  {id: 8, user: {firstName: 'Alan', lastName: 'Campbell', email: 'alan.cambell@example.com', password: '1234'}, teacher_id: 1},
  {id: 9, user: {firstName: 'Andrew', lastName: 'Basore', email: 'andrew.basore@example.com', password: '1234'}, teacher_id: 1},
  {id: 10, user: {firstName: 'Jamie', lastName: 'Yu', email: 'jamie.yu@example.com', password: '1234'}, teacher_id: 1},
  {id: 11, user: {firstName: 'Kimberly', lastName: 'Winston-Jackson', email: 'kimberly.winstonjackson@example.com', password: '1234'}, teacher_id: 1}
], students => db.model('students').create(students, {include:[User]}))

//http://www.mathplanet.com/education/pre-algebra
const seedTasks = () => db.Promise.map([
  {subject: 'Pre-Algebra', topic: 'Introducing Algebra', title: 'Operations in the correct order', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Introducing Algebra', title: 'The slope of a linear function', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Introducing Algebra', title: 'Identify properties', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Introducing Algebra', title: 'Equations with variables', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Introducing Algebra', title: 'Coordinate system and ordered pairs', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Introducing Algebra', title: 'Inequalities', description: 'default description', teacher_id: 1, grade_level: 8},

  {subject: 'Pre-Algebra', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Graphing and functions', title: 'The slope of a linear function', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Graphing and functions', title: 'Graphing linear inequalities',description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Graphing and functions', title: 'The slope of a linear function', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Graphing and functions', title: 'Graphing linear inequalities',description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Graphing and functions', title: 'Solve systems of equations by graphing',description: 'default description', teacher_id: 1, grade_level: 8},

  {subject: 'Pre-Algebra', topic: 'Area and volumes', title: 'Measure areas',description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Pre-Algebra', topic: 'Area and volumes', title: 'Solve systems of equations by graphing',description: 'default description', teacher_id: 1, grade_level: 8}
], task => db.model('tasks').create(task))

const seedQuizzes = () => db.Promise.map([
  {title: 'Math Quiz #1', teacher_id: 1, questions: [
    {inquiry: 'What is 2 + 2?', answer:['4', '8', '1', '12'], type:'multiple-choice', solution: 0},
    {inquiry: 'What is the answer to life the universe and everything?', answer:['pasta', '42', '34', 'yes'], type:'multiple-choice', solution: 1},
    {inquiry: 'What is 4 x 5?', answer:['35', '38', '20', '7'], type:'multiple-choice', solution: 2}
    ]},
  {title: 'Math Quiz #2', teacher_id: 1},
  {title: 'Math Quiz #3', teacher_id: 1}
], quiz => db.model('quizzes').create(quiz, {include: [Question ]}))

const seedAssignments = () => db.Promise.map([
  {title: 'Operations in the correct order', due_date: '2017-4-12', student_id: 1, status:'assigned', teacher_id: 1, type:'task', reward: 10, ETC: '2017-5-11'},
  {title: 'The slope of a linear function', due_date: '2017-03-19', student_id: 1,  status:'completed', teacher_id: 1, type:'task', reward: 5, ETC: '2017-5-11'},
  {title: 'Math Quiz #1', due_date: '2017-04-01', student_id: 1, status:'doing', teacher_id: 1, type:'quiz', quiz_id: 1, reward: 3, ETC: '2017-5-11'},
  {title: 'English Quiz #1', due_date: '2017-03-21', student_id: 1, status:'completed', teacher_id: 1, type:'quiz', quiz_id: 1, reward: 7, ETC: '2017-5-11'},
  {title: 'English Essay #1', due_date: '2017-03-20', student_id: 1, status:'assigned', teacher_id: 1, type:'task', task_id: 12, reward: 10, ETC: '2017-5-11', description: 'On a separate piece of paper, write an essay in which you discuss the play Romeo and Juliet, by William Shakespeare, using the quote provided.'}
], assignment => db.model('assignments').create(assignment))



db.didSync
  .then(() => db.sync({force: true}))
	.then(seedTeachers)
  .then(teachers => console.log(`Seeded ${teachers.length} teachers OK`))
  .then(seedStudents)
  .then(students => console.log(`Seeded ${students.length} students OK`))
  .then(seedTasks)
  .then(tasks => console.log(`Seeded ${tasks.length} tasks OK`))
  .then(seedQuizzes)
  .then(quizzes => console.log(`Seeded ${quizzes.length} quizzes OK`))
	.then(seedAssignments)
  .then(assignments => console.log(`Seeded ${assignments.length} assignments OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
