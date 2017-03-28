'use strict'

const db = require('APP/db')
const Student = db.model('students')
const Assignment = db.model('assignments')
const Teacher = db.model('teachers')
const User = db.model('users')
const Quiz = db.model('quizzes')
const Task = db.model('tasks')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/claim', mustBeLoggedIn, (req, res, next) =>
    Student.findAll({
    	where: {
    		teacher_id: null
    	},
    	order: ['id'],
    	include: [User]
    })
    .then(students => res.json(students))
    .catch(next))
	.put('/claim/:studentId', mustBeLoggedIn, (req, res, next) => {
		console.log(req.body)
		Student.update({teacher_id: req.body.teacherId}, {
			where: {
				id: +req.params.studentId
			}
		})
		.then(claimed => res.json(claimed))
		.catch(next)
	})
	.get('/:studentId/assignments', mustBeLoggedIn, (req, res, next) =>
		Student.findById(req.params.studentId)
		.then(student => student.getAssignments({order: ['status']}))
		.then(assignments => res.json(assignments))
		.catch(next))
	.post('/:studentId/assignments/', (req, res, next) =>
	  Assignment.create(req.body)
	  .then(assignment => res.send(assignment))
	  .catch(next))
	.get('/:studentId/assignments/:assignmentId', mustBeLoggedIn, (req, res, next) =>
		Assignment.findById(req.params.assignmentId, {
			include: {
				model: Student,
				include: {
					model:User,
					attributes:['firstName', 'lastName']
				}
			}
		})
		.then(assignment => res.json(assignment))
		.catch(next))
	.get('/:studentId', mustBeLoggedIn, (req, res, next) =>
		Student.findById(+req.params.studentId,
		{include: [
			{model:User, attributes:['firstName', 'lastName']},
			{model:Teacher, include:[{model:User, attributes:['firstName', 'lastName']}]},
			{model: Assignment, include:[Quiz, Task]}]
		})
		.then(student => res.json(student))
		.catch(next))
	.put('/:studentId/', (req, res, next) =>
		Student.update(req.body, {where:{id: +req.params.studentId}})
		.then(updated => 	res.json(updated))
		.catch(next))
	.put('/:studentId/assignments/:assignmentId', (req, res, next) =>
	  Assignment.findById(req.params.assignmentId)
	  .then(assignment =>
	  	assignment.update(req.body))
	  .then(assignment =>
	  	res.send(assignment))
	  .catch(next))
