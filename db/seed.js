const db = require('APP/db')

 // {name: 'Geoff Bass', email: 'geoff.bass@example.com', password: '1234'},
 //  {name: 'Freda Nada', email: 'freda.nada@example.com', password: '1234'},
 //  {name: 'Andrew Gionfriddo', email: 'andrew.gionfriddo@example.com', password: '1234'}
const User = db.model('users')
const Question = db.model('questions')
const seedTeachers = () => db.Promise.each([
  {user: {firstName: 'Geoff', lastName: 'Bass', email: 'geoff.bass@example.com', password: '1234', avatar: 'avatars_geoff.jpg'}},
  {user: {firstName: 'Freda', lastName: 'Nada', email: 'freda.nada@example.com', password: '1234', avatar: 'avatars_freda.jpg'}},
  {user: {firstName: 'Andrew', lastName: 'Gionfriddo', email: 'andrew.gionfriddo@example.com', password: '1234', avatar: 'avatars_andrewg.jpg'}}
], teacher => db.model('teachers').create(teacher, {include:[User]}))

const allStudents = [
  {user: {firstName: 'Cody', lastName: 'Kelly', email: 'cody@example.com', password: '1234', avatar: 'avatars_cody.jpg'}, teacher_id: 1},
  {user: {firstName: 'Corryn', lastName: 'Young', email: 'corryn.young@example.com', password: '1234', avatar: 'avatars_correy.jpg'}, teacher_id: 1},
  {user: {firstName: 'Jonathan', lastName: 'Mann', email: 'jonathan.mann@example.com', password: '1234', avatar: 'avatars_jonathan.jpg'}, teacher_id: 1},
  {user: {firstName: 'Fabiano', lastName: 'Pires da Silva', email: 'fabiano.piresdasliva@example.com', password: '1234', avatar: 'avatars_fabiano.jpg'}, teacher_id: 1},
  {user: {firstName: 'Aaron', lastName: 'Aichlmayr', email: 'aaron.aichlmayr@example.com', password: '1234', avatar: 'avatars_aaron.jpg'}, teacher_id: 1},
  {user: {firstName: 'Jason', lastName: 'Lam', email: 'jason.lam@example.com', password: '1234', avatar: 'avatars_jasonl.jpg'}, teacher_id: 1},
  {user: {firstName: 'Jason', lastName: 'Powell', email: 'jason.powell@example.com', password: '1234', avatar: 'avatars_jasonp.jpg'}, teacher_id: 1},
  {user: {firstName: 'Alan', lastName: 'Campbell', email: 'alan.cambell@example.com', password: '1234', avatar: 'avatars_alan.jpg'}, teacher_id: 1},
  {user: {firstName: 'Andrew', lastName: 'Basore', email: 'andrew.basore@example.com', password: '1234', avatar: 'avatars_andrewb.jpg'}, teacher_id: 1},
  { user: {firstName: 'Jamie', lastName: 'Yu', email: 'jamie.yu@example.com', password: '1234', avatar: 'avatars_jamie.jpg'}, teacher_id: 1},
  { user: {firstName: 'Kimberly', lastName: 'Winston-Jackson', email: 'kimberly.winstonjackson@example.com', password: '1234', avatar: 'avatars_kim.jpg'}, teacher_id: 1},
  { user: {firstName: 'Megan', lastName: 'Jones', email: 'meg.jones@example.com', password: '1234'}},
  { user: {firstName: 'Jesse', lastName: 'Adams', email: 'jesse.adams@example.com', password: '1234'}},
  { user: {firstName: 'Caroline', lastName: 'Jackson', email: 'caroline.jackson@example.com', password: '1234'}},
  { user: {firstName: 'Hugo', lastName: 'Green', email: 'hugo.green@example.com', password: '1234'}},
  { user: {firstName: 'Emma', lastName: 'Clarke', email: 'emma.clarke@example.com', password: '1234'}, teacher_id: 1}
]

const seedStudents = () => db.Promise.each(allStudents, students => db.model('students').create(students, {include:[User]}))

//http://www.mathplanet.com/education/pre-algebra
const allTasks = [
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Operations in the correct order', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'The slope of a linear function', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Identify properties', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Equations with variables', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Coordinate system and ordered pairs', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Inequalities', description: 'default description', teacher_id: 1, grade_level: 8},

  {subject: 'Math', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane II', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Graphing and functions', title: 'The slope of a linear function II', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Graphing and functions', title: 'Graphing linear inequalities II',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane III', description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'The slope of a linear function III', description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Graphing linear inequalities III',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Solve systems of equations by graphing II',description: 'default description', teacher_id: 1, grade_level: 8},

  { subject: 'Math', topic: 'Area and volumes', title: 'Measure areas',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Area and volumes', title: 'Solve systems of equations by graphing III',description: 'default description', teacher_id: 1, grade_level: 8},
  // Science
  { subject: 'Science', topic: 'Astronomy', title: 'Astronomy #1', description: 'List all planets in order', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Astronomy', title: 'Write a paper about Pluto', description: 'Should it be a planet in the Solar System or not?', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Anatomy', title: 'Anatomy List #1', description: 'List all bones from the human body', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Anatomy', title: 'Science Essay #1', description: 'Watch an episode of Grey\'s Anatomy and write an Essay about it', teacher_id: 1, grade_level: 1},
  // English
  { subject: 'English', topic: 'Regular Verbs', title: 'Verb List #1', description: 'List 50 regular verbs and their present, past and past participle forms', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Irregular Verbs', title: 'Verb List #2', description: 'List 50 irregular verbs and their present, past and past participle forms', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Palindromes', title: 'Word List #1', description: 'List 10 palindromes in alphabetical order', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Poetry', title: 'All The Single Ladies', description: 'Read the lyrics for the poem "Put A Ring on It" written by the contemporary writer Beyonce Knowles', teacher_id: 1, grade_level: 1},
  // History
  { subject: 'History', topic: 'Presidents', title: 'Presidents List #1', description: 'List all American presidents in alphabetical order', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'History Essay #1', description: 'Write an essay about the whole American history since day one', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #1', description: 'Read pages 234-432 from the textbook about American History', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'WWII', title: 'Reading #2', description: 'Read pages 23-42 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'WWI', title: 'Reading #3', description: 'Read pages 13-53 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'MJ', title: 'Essay #1', description: 'Write an essay about life and death of Michael Jackson', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Important Moments in US History', description: 'Describe the five most important moments in US History', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Influential Leaders', description: 'Write a persuasive essay on who you think was the most influential president.', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #2', description: 'Read chapters 2 and 3 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #3', description: 'Read chapters 4 and 5 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Moments in history', description: 'Write a 5 paragraph essay on the most important invention of the 19th century', teacher_id: 1, grade_level: 1},{subject: 'Math', topic: 'Introducing Algebra', title: 'Operations in the correct order', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'The slope of a linear function', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Identify properties', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Equations with variables', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Coordinate system and ordered pairs', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Inequalities', description: 'default description', teacher_id: 1, grade_level: 8},

  {subject: 'Math', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane II', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Graphing and functions', title: 'The slope of a linear function II', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Graphing and functions', title: 'Graphing linear inequalities II',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane III', description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'The slope of a linear function III', description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Graphing linear inequalities III',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Solve systems of equations by graphing II',description: 'default description', teacher_id: 1, grade_level: 8},

  { subject: 'Math', topic: 'Area and volumes', title: 'Measure areas',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Area and volumes', title: 'Solve systems of equations by graphing III',description: 'default description', teacher_id: 1, grade_level: 8},
  // Science
  { subject: 'Science', topic: 'Astronomy', title: 'Astronomy #1', description: 'List all planets in order', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Astronomy', title: 'Write a paper about Pluto', description: 'Should it be a planet in the Solar System or not?', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Anatomy', title: 'Anatomy List #1', description: 'List all bones from the human body', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Anatomy', title: 'Science Essay #1', description: 'Watch an episode of Grey\'s Anatomy and write an Essay about it', teacher_id: 1, grade_level: 1},
  // English
  { subject: 'English', topic: 'Regular Verbs', title: 'Verb List #1', description: 'List 50 regular verbs and their present, past and past participle forms', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Irregular Verbs', title: 'Verb List #2', description: 'List 50 irregular verbs and their present, past and past participle forms', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Palindromes', title: 'Word List #1', description: 'List 10 palindromes in alphabetical order', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Poetry', title: 'All The Single Ladies', description: 'Read the lyrics for the poem "Put A Ring on It" written by the contemporary writer Beyonce Knowles', teacher_id: 1, grade_level: 1},
  // History
  { subject: 'History', topic: 'Presidents', title: 'Presidents List #1', description: 'List all American presidents in alphabetical order', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'History Essay #1', description: 'Write an essay about the whole American history since day one', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #1', description: 'Read pages 234-432 from the textbook about American History', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'WWII', title: 'Reading #2', description: 'Read pages 23-42 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'WWI', title: 'Reading #3', description: 'Read pages 13-53 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'MJ', title: 'Essay #1', description: 'Write an essay about life and death of Michael Jackson', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Important Moments in US History', description: 'Describe the five most important moments in US History', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Influential Leaders', description: 'Write a persuasive essay on who you think was the most influential president.', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #2', description: 'Read chapters 2 and 3 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #3', description: 'Read chapters 4 and 5 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Moments in history', description: 'Write a 5 paragraph essay on the most important invention of the 19th century', teacher_id: 1, grade_level: 1},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Operations in the correct order', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'The slope of a linear function', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Identify properties', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Equations with variables', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Coordinate system and ordered pairs', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Introducing Algebra', title: 'Inequalities', description: 'default description', teacher_id: 1, grade_level: 8},

  {subject: 'Math', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane II', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Graphing and functions', title: 'The slope of a linear function II', description: 'default description', teacher_id: 1, grade_level: 8},
  {subject: 'Math', topic: 'Graphing and functions', title: 'Graphing linear inequalities II',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Linear equations in the coordinate plane III', description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'The slope of a linear function III', description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Graphing linear inequalities III',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Graphing and functions', title: 'Solve systems of equations by graphing II',description: 'default description', teacher_id: 1, grade_level: 8},

  { subject: 'Math', topic: 'Area and volumes', title: 'Measure areas',description: 'default description', teacher_id: 1, grade_level: 8},
  { subject: 'Math', topic: 'Area and volumes', title: 'Solve systems of equations by graphing III',description: 'default description', teacher_id: 1, grade_level: 8},
  // Science
  { subject: 'Science', topic: 'Astronomy', title: 'Astronomy #1', description: 'List all planets in order', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Astronomy', title: 'Write a paper about Pluto', description: 'Should it be a planet in the Solar System or not?', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Anatomy', title: 'Anatomy List #1', description: 'List all bones from the human body', teacher_id: 1, grade_level: 1},
  { subject: 'Science', topic: 'Anatomy', title: 'Science Essay #1', description: 'Watch an episode of Grey\'s Anatomy and write an Essay about it', teacher_id: 1, grade_level: 1},
  // English
  { subject: 'English', topic: 'Regular Verbs', title: 'Verb List #1', description: 'List 50 regular verbs and their present, past and past participle forms', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Irregular Verbs', title: 'Verb List #2', description: 'List 50 irregular verbs and their present, past and past participle forms', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Palindromes', title: 'Word List #1', description: 'List 10 palindromes in alphabetical order', teacher_id: 1, grade_level: 1},
  { subject: 'English', topic: 'Poetry', title: 'All The Single Ladies', description: 'Read the lyrics for the poem "Put A Ring on It" written by the contemporary writer Beyonce Knowles', teacher_id: 1, grade_level: 1},
  // History
  { subject: 'History', topic: 'Presidents', title: 'Presidents List #1', description: 'List all American presidents in alphabetical order', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'History Essay #1', description: 'Write an essay about the whole American history since day one', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #1', description: 'Read pages 234-432 from the textbook about American History', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'WWII', title: 'Reading #2', description: 'Read pages 23-42 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'WWI', title: 'Reading #3', description: 'Read pages 13-53 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'MJ', title: 'Essay #1', description: 'Write an essay about life and death of Michael Jackson', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Important Moments in US History', description: 'Describe the five most important moments in US History', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Influential Leaders', description: 'Write a persuasive essay on who you think was the most influential president.', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #2', description: 'Read chapters 2 and 3 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Reading #3', description: 'Read chapters 4 and 5 from the textbook', teacher_id: 1, grade_level: 1},
  { subject: 'History', topic: 'American History', title: 'Moments in history', description: 'Write a 5 paragraph essay on the most important invention of the 19th century', teacher_id: 1, grade_level: 1}

]

const seedTasks = () => db.Promise.each(allTasks, task => db.model('tasks').create(task))

const allQuizzes = [
  // Math
  { subject: 'Math', title: 'Addition Quiz #1', teacher_id: 1, description: 'Basic sum problems', questions: [
    {inquiry: 'What is 31 + 3?', answer:['6', '34', '1', '9'], type:'multiple-choice', solution: 1},
    {inquiry: 'What is 2 + 11 + 5?', answer:['16', '17', '18', '19'], type:'multiple-choice', solution: 2},
    {inquiry: 'What is 345 + 534', answer:['819', '808', '879', '809'], type:'multiple-choice', solution: 2},
   ]},
   { subject: 'Math', title: 'Subtraction Quiz #1', teacher_id: 1, description: 'Basic subtraction problems', questions: [
    {inquiry: 'What is 31 - 3?', answer:['26', '30', '28', '29'], type:'multiple-choice', solution: 2},
    {inquiry: 'What is 2 + 11 - 5?', answer:['8', '9', '10', '7'], type:'multiple-choice', solution: 0},
    {inquiry: 'What is 645 - 534', answer:['101', '91', '110', '111'], type:'multiple-choice', solution: 3},
   ]},
   { subject: 'Math', title: 'Multiplication Quiz #1', description: 'Solve all the questions.', teacher_id: 1, questions: [
    {inquiry: 'What is 3 x 3?', answer:['261', '30', '9', '12'], type:'multiple-choice', solution: 2},
    {inquiry: 'What is 12 x 5?', answer:['50', '60', '72', '70'], type:'multiple-choice', solution: 1},
    {inquiry: 'What is 1 + 1 x 3', answer:['3', '4', '5', '6'], type:'multiple-choice', solution: 1},
   ]},
   { subject: 'Math', title: 'Division Quiz #1', teacher_id: 1,  description: 'Somewhat hard division questions', questions: [
    {inquiry: 'What is 3 : 3?', answer:['-1', '0', '1', '3'], type:'multiple-choice', solution: 2},
    {inquiry: 'What is 12 : 4?', answer:['4', '3', '2', '2.5'], type:'multiple-choice', solution: 1},
    {inquiry: 'What is 4 x 2 : 8', answer:['0', '1', '2', '3'], type:'multiple-choice', solution: 1},
   ]},
   { subject: 'Math', title: 'Final Super Hard Quiz', teacher_id: 1,  description: 'Covering all content we study so far',questions: [
    {inquiry: 'What is 2 + 2?', answer:['4', '8', '1', '12'], type:'multiple-choice', solution: 0},
    {inquiry: 'What is the answer to life the universe and everything?', answer:['pasta', '42', '34', 'yes'], type:'multiple-choice', solution: 1},
    {inquiry: 'Julie has 13 apples only, if she gives 5 to Max and eat 4 bananas, how many pineapples will she have?', answer:['4', '5', '0', '8'], type:'multiple-choice', solution: 2}
  ]},
  // Science
  { subject: 'Science', title: 'Science Quiz #1', teacher_id: 1,  description: 'Questions about the first 3 chapters of our textbook', questions: [
    {inquiry: 'What is planet?', answer:['A thing in the universe.', 'A type of pasta', 'A bug', '9'], type:'multiple-choice', solution: 0},
    {inquiry: 'What is cell?', answer:['A phone', 'A smal thing in living beings', 'Money?', 'I have no idea'], type:'multiple-choice', solution: 1},
    {inquiry: 'What is animal?', answer:['A living being', 'A non-living being', 'A character in the Muppets', 'I have no idea'], type:'multiple-choice', solution: 0},
   ]},
   { subject: 'Science', title: 'Anatomy Quiz #1', teacher_id: 1, description: 'Read chapter 5 of our textbook before solving this quiz', questions: [
    {inquiry: 'How many bones are in the human body?', answer:['More than 150', '10', '58', '53'], type:'multiple-choice', solution: 0},
    {inquiry: 'How many bones are in the butterfly body?', answer:['10', '3, if you count the wings', '0', '153'], type:'multiple-choice', solution: 2},
    {inquiry: 'What is NOT a body part?', answer:['Head', 'Hand', 'Toe', 'Pizza'], type:'multiple-choice', solution: 3},
   ]},
   { subject: 'Science', title: 'Science Quiz #2', teacher_id: 1,  description: 'Random questions about life and science', questions: [
    {inquiry: 'Is there a God?', answer:['Yes.', 'No.', 'Maybe.', 'You are not allowed to ask me this question, and I\'m sueing this school.'], type:'multiple-choice', solution: 3},
    {inquiry: 'How is the best way to decompose a dead body?', answer:['Burning it.', 'Using acid in a bathtub.', 'Burrying it.', 'Feeding it to the dogs.'], type:'multiple-choice', solution: 1},
    {inquiry: 'How many fingers and toes are in the human body?', answer:['12', '11', '10', '8'], type:'multiple-choice', solution: 2},
   ]},
   // History
   { subject: 'History', title: 'History Quiz #1', teacher_id: 1, description: 'American History questions about presidents', questions: [
    {inquiry: 'How was the first American president?', answer:['Obama', 'Washington', 'Jefferson', 'Lincoln'], type:'multiple-choice', solution: 1},
    {inquiry: 'Who was the second American president?', answer:['Adams', 'Washington', 'Trump', 'Lincoln'], type:'multiple-choice', solution: 0},
    {inquiry: 'How was the 45th American president?', answer:['Bush', 'Obama', 'Trump', 'Hilary Clinton'], type:'multiple-choice', solution: 2},
   ]},
   { subject: 'History', title: 'History Quiz #2', teacher_id: 1, description: 'Read pages 35-57 before solving this quiz.', questions: [
    {inquiry: 'What year did the United States celebrate its bicentennial?', answer:['1979', '2017', '1976', '1983'], type:'multiple-choice', solution: 2},
    {inquiry: 'During the Vietnam War, was the United States allied with North Vietnam or South Vietnam?', answer:['North', 'South', 'East', 'West'], type:'multiple-choice', solution: 1},
    {inquiry: 'How was the 44th American president?', answer:['Bush', 'Obama', 'Trump', 'Hilary Clinton'], type:'multiple-choice', solution: 1},
   ]},
   // English
   { subject: 'English', title: 'Synonyms Quiz #1',  description: 'Review your notes from week 2 before solving this questions', teacher_id: 1, questions: [
    {inquiry: 'What is NOT a synonym for Scandalous?', answer:['sordid', 'improper', 'discreditable', 'seemly'], type:'multiple-choice', solution: 3},
    {inquiry: 'What is a synonym for Trustworthy?', answer:['unreliable', 'honorable', 'fickle', 'erratic'], type:'multiple-choice', solution: 1},
    {inquiry: 'What is NOT a synonym for delicious?', answer:['Pizza', 'Icecream', 'Chocolate', 'Broccoli'], type:'multiple-choice', solution: 3},
   ]},
   { subject: 'English', title: 'English Quiz #1', description: 'Make sure you have your notes with you before solving this quiz. Also, remember to get the irregular verb list handed to you during class', teacher_id: 1, questions: [
    {inquiry: 'Complete the Beyonce\'s lyrics: If I were a boy...', answer:['...I think I could understand', '...I swear I\'d be a better man', '...All the single ladies', '...I would run the world'], type:'multiple-choice', solution: 0},
    {inquiry: 'What word is NOT a `to be` verb form?', answer:['was', 'been', 'potato', 'am'], type:'multiple-choice', solution: 2},
    {inquiry: 'Which word is NOT a palindrome?', answer:['Civic', 'Racecar', 'Moon', 'Noon'], type:'multiple-choice', solution: 2},
   ]},
   // Reading
   { subject: 'Reading', title: 'Reading Quiz #1', description: 'Finish reading the book "The Sad Elephant That Had No Friends, But Himself"', teacher_id: 1, questions: [
    {inquiry: 'What is the name of Bob\'s best friend?', answer:['Bob', 'Bart', 'Bert', 'Burt'], type:'multiple-choice', solution: 0},
    {inquiry: 'How many friends does Bob have?', answer:['0', '1, himself', '2', '12'], type:'multiple-choice', solution: 1},
    {inquiry: 'Did Bob find strength in himself to be its own best friend?', answer:['Yes, and that is very sad', 'No', 'I did not finish the book', 'I haven\'t started reading this book, so my guess is no'], type:'multiple-choice', solution: 0},
   ]},
]

const seedQuizzes = () => db.Promise.each(allQuizzes, quiz => db.model('quizzes').create(quiz, {include: [Question ]}))

// Generate array of dates from 2 days ago and 4 days ahead
const generateDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = 0; i < 7; i++) {
    let day = today.getDate() - 2 + i;
    if (day < 1) day = 1;
    if (day < 10) day = '0' + day;
    let month = today.getMonth() + 1;
    if (month < 10) month = '0' + month;
    if (day > 30) {
      month++;
      day -= 30;
    }
   dates.push(`${today.getFullYear()}-${month}-${day}`)
  }
  return dates;
}

const generateAssignments = () => {
  let result = [];
  const dates = generateDates();
  const rewards = [5,8,10,12,5,3];
  const grades = [53, 96, 65, 72, 88, 91]
  const etc = [1,2,3];
  const status = ['assigned', 'archived', 'doing','archived', 'completed', 'archived']

  for (let i = 0; i < allStudents.length; i++) {
    let quizIdsArr = [];
    let taskIdsArr = [];
    for (let a = 0; a < 21; a++) {

      let assignment = {};
      // Add teacher (always 1)
      assignment.teacher_id = 1;
      // Add student
      assignment.student_id = i + 1;
      // Add due_date
      assignment.due_date = dates[((a+i)%6)];
      // Add rewards
      assignment.reward = rewards[((a+i)%6)];
      // Add ETC
      assignment.ETC = rewards[((a+i)%3)];
      // Add status
      assignment.status = status[((a+i)%6)];
      // Assign type
      if ((i + a) % 2 === 0) {
        assignment.type = 'quiz';
        let quizId = ((a + i) * 13) % allQuizzes.length;
        let r = a * i;
        while (quizIdsArr.indexOf(quizId) !== -1 && quizIdsArr.length !== 0) {
          quizId = ((a + i + r) * 3) % allQuizzes.length;
          r++;
        }
        quizIdsArr.push(quizId);
        assignment.quiz_id = quizId + 1;
        assignment.title = allQuizzes[quizId].title;
        assignment.description = allQuizzes[quizId].description;
        // Reset status for quizzes
        if (assignment.status === 'completed' || assignment.status === 'archived') assignment.status = 'assigned';
      } else {
        assignment.type = 'task';
        let taskId = ((a + i) * 13) % allTasks.length;
        let r = a * i;
        while (taskIdsArr.indexOf(taskId) !== -1 && taskIdsArr.length !== 0) {
          taskId = ((a + i + r) * 3) % allTasks.length;
          r++;
        }
        taskIdsArr.push(taskId);
        assignment.task_id = taskId + 1;
        assignment.title = allTasks[taskId].title;
        assignment.description = allTasks[taskId].description;
        if (assignment.status === "archived") assignment.grade = a+i+70;
      }
      result.push(assignment);
    }
  }

  return result;
}

let allAssignments = generateAssignments();

const seedAssignments = () => db.Promise.each(allAssignments, assignment => db.model('assignments').create(assignment))



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
