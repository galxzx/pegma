'use strict'

const db = require('APP/db')
const Student = db.model('students')
const Assignment = db.model('assignments')
const Teacher = db.model('teachers')
const User = db.model('users')
const Task = db.model('tasks')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()

  .get('/', (req, res, next) =>
    Teacher.findAll({include:{model: User, attributes:['name']}})
      .then(teachers => res.json(teachers))
      .catch(next))
	.get('/:teacherId/students', mustBeLoggedIn, (req, res, next) =>
		Teacher.findById(req.params.teacherId)
		.then(teacher => teacher.getStudents({include: [Assignment, User]}))
		.then(students => res.json(students))
		.catch(next))
	.post('/:teacherId/assignments', mustBeLoggedIn, (req, res, next) => {
		let teacherId = Number(req.params.teacherId)
		let item = req.body.item
		let students = req.body.students
		Teacher.findById(teacherId)
		.then(teacher => teacher.getStudents({where: {id: {$in: students}}, include: [Assignment, User]}))	
		.then(students => {
			const assignments = students.map(student => {
				return Object.assign({}, {student_id: student.id, teacher_id: teacherId}, item)
			})
			return Assignment.bulkCreate(assignments)
		})
		.then(() => Assignment.findAll({where: {teacher_id: teacherId}}))
		.then((assignments) => res.json(assignments))
		.catch(next)
	})


