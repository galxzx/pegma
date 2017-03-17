const db = require('APP/db')

 // {name: 'Geoff Bass', email: 'geoff.bass@example.com', password: '1234'},
 //  {name: 'Freda Nada', email: 'freda.nada@example.com', password: '1234'},
 //  {name: 'Andrew Gionfriddo', email: 'andrew.gionfriddo@example.com', password: '1234'}
const User = db.model('users')

const seedTeachers = () => db.Promise.map([
  {user: {name: 'Geoff Bass', email: 'geoff.bass@example.com', password: '1234'}},
  {user: {name: 'Freda Nada', email: 'freda.nada@example.com', password: '1234'}},
  {user: {name: 'Andrew Gionfriddo', email: 'andrew.gionfriddo@example.com', password: '1234'}}
], teacher => db.model('teachers').create(teacher, {include:[User]}))

const seedStudents = () => db.Promise.map([
  {user: {name: 'Cody', email: 'cody@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Corryn Young', email: 'corryn.young@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Jonathan', email: 'jonathan.mann@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Fabiano Pires da Silva', email: 'fabiano.piresdasliva@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Aaron Aichlmayr', email: 'aaron.aichlmayr@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Jason Lam', email: 'jason.lam@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Jason Powell', email: 'jason.powell@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Alan', email: 'alan.cambell@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Andrew Basore', email: 'andrew.basore@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Jamie Yu', email: 'jamie.yu@example.com', password: '1234'}, teacher_id: 1},
  {user: {name: 'Kimberly Winston-Jackson', email: 'kimberly.winstonjackson@example.com', password: '1234'}, teacher_id: 1}
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
  {title: 'Math Quiz #1', teacher_id: 1},
  {title: 'Math Quiz #2', teacher_id: 1},
  {title: 'Math Quiz #3', teacher_id: 1}
], quiz => db.model('quizzes').create(quiz))

const seedAssignments = () => db.Promise.map([
  {due_date: '2017-4-12', student_id: 1, status:'assigned', teacher_id: 1, type:'task', reward: 10, ETC: '2017-5-11'},
  {due_date: '2017-03-20', student_id: 1,  status:'future', teacher_id: 1, type:'task', reward: 5, ETC: '2017-5-11'},
  {due_date: '2017-04-01', student_id: 1, status:'inProgress', teacher_id: 1, type:'quiz', quiz_id: 1, reward: 3, ETC: '2017-5-11'}
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
