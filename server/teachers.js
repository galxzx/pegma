'use strict'

const db = require('APP/db')
const Student = db.model('students')
const Assignment = db.model('assignments')
const Teacher = db.model('teachers')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/:teacherId/students', mustBeLoggedIn, (req, res, next) => 
		Teacher.findById(req.params.teacherId)
		.then(teacher => teacher.getStudents({include: ['Assignment']}))	
		.then(students => res.json(students))
		.catch(next))
