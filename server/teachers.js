'use strict'

const db = require('APP/db')
const Student = db.model('students')
const Assignment = db.model('assignments')
const Teacher = db.model('teachers')
const User = db.model('users')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/:teacherId/students', mustBeLoggedIn, (req, res, next) =>
    Teacher.findById(req.params.teacherId)
    .then(teacher => teacher.getStudents({include: ['Assignment']}))
    .then(students => res.json(students))
    .catch(next))
  .get('/', (req, res, next) =>
    Teacher.findAll({include:{model: User, attributes:['name']}})
      .then(teachers => res.json(teachers))
      .catch(next)
    )
