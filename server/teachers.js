'use strict'

const db = require('APP/db')
const Student = db.model('students')
const Assignment = db.model('assignments')
const Teacher = db.model('teachers')
const User = db.model('users')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/:teacherId/students', mustBeLoggedIn, (req, res, next) => 
		Teacher.findById(req.params.teacherId)
		.then(teacher => teacher.getStudents({include: [Assignment, User]}))	
		.then(students => res.json(students))
		.catch(next))
	.post('/:teacherId/assignments', mustBeLoggedIn, (req, res, next) => {
		Teacher.findById(req.params.teacherId)
		.then(teacher => teacher.getStudents({include: [Assignment, User]}))	
		.then(students => {
			const assignments = students.map(student => {
				return Object.assign({}, {student_id: student.id, teacher_id: req.params.teacherId}, req.body)
			})
			return Assignment.bulkCreate(assignments)
		})
		.then(() => Assignment.findAll({where: {teacher_id: req.params.teacherId}}))
		.then((assignments) => res.json(assignments))
		.catch(next)
	})	

