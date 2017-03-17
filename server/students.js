'use strict'

const db = require('APP/db')
const Student = db.model('students')
const Assignment = db.model('assignments')
const Teacher = db.model('teachers')


const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/:studentId/assignments', mustBeLoggedIn, (req, res, next) => 
		Student.findById(req.params.studentId)
		.then(student => student.getAssignments({order: ['status']}))	
		.then(assignments => res.json(assignments))
		.catch(next))
	.get('/:studentId/assignments/:assignmentId', mustBeLoggedIn, (req, res, next) => 
		Assignment.findById(req.params.assignmentId)
		.then(assignment => res.json(assignment))
		.catch(next))
	.get('/:studentId/', mustBeLoggedIn, (req, res, next) => 
		Student.findById(req.params.studentId, {include: [Teacher, Assignment]})
		.then(student => res.json(student))
		.catch(next))