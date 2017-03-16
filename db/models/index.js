'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Student = require('./student')
const Teacher = require('./teacher')
const Quiz = require('./quiz')
const Question = require('./question')
const Assignment = require('./assignment')
const Task = require('./task')

OAuth.belongsTo(User)
User.hasOne(OAuth)

Student.belongsTo(User)
Teacher.belongsTo(User)
Student.belongsTo(Teacher)
Teacher.hasMany(Student)

Quiz.belongsTo(Teacher)
Teacher.hasMany(Quiz)
// Quiz.belongsTo(Assignment) ** I don't think quiz needs to know about assignment
Quiz.hasMany(Question)
Question.belongsTo(Quiz)


Assignment.belongsTo(Quiz)
Assignment.belongsTo(Student)
Student.hasMany(Assignment)
Assignment.belongsTo(Task)

Task.belongsTo(Teacher)
Teacher.hasMany(Task)

module.exports = {
	User,
  Student,
  Teacher,
	Quiz,
	Question
};
