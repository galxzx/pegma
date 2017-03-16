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

OAuth.belongsTo(User)
User.hasOne(OAuth)

Student.belongsTo(User)
Teacher.belongsTo(User)
Student.belongsTo(Teacher)
Teacher.hasMany(Student)

Quiz.belongsTo(Teacher)
// Quiz.belongsTo(Assignment)
Quiz.hasMany(Question)
Question.belongsTo(Quiz)

module.exports = {
	User,
  Student,
  Teacher,
	Quiz,
	Question
};
