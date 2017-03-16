'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')

const Student = require('./student')
const Teacher = require('./teacher')


OAuth.belongsTo(User)
User.hasOne(OAuth)

Student.belongsTo(User)
Teacher.belongsTo(User)
Student.belongsTo(Teacher)
Teacher.hasMany(Student)

module.exports = {User}
