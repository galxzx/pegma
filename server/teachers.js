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

  .get('/', (req, res, next) =>
    Teacher.findAll({include:{model: User, attributes:['firstName', 'lastName']}})
      .then(teachers => res.json(teachers))
      .catch(next))
  .get('/:teacherId', (req, res, next) =>
    Teacher.findById(req.params.teacherId)
      .then(teacher => res.json(teacher))
      .catch(next))
  .put('/:teacherId', (req, res, next) =>
    Teacher.findById(req.params.teacherId)
      .then(teacher => teacher.update(req.body))
      .then(teacher => res.json(teacher))
      .catch(next))
  .get('/:teacherId/claim', (req, res, next) =>
    Student.findAll({
    	where: {
    		teacher_id: null
    	},
    	order: ['id'],
    	include: [User]
    })
      .then(students => res.json(students))
      .catch(next))
	.get('/:teacherId/students', mustBeLoggedIn, (req, res, next) =>
		Teacher.findById(req.params.teacherId)
		.then(teacher => teacher.getStudents({
			order:['id'],
			include: [
				{model: Assignment, include:[Quiz, Task]}, User]}))
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
		.then(() => Student.findAll({order: ['id'], where: {teacher_id: teacherId}, include: [Assignment, User]}))
		.then((students) => {
			res.json(students)
		})
		.catch(next)
	})
	.put('/assignments/:assignmentId', (req, res, next) =>
	  Assignment.findById(req.params.assignmentId)
	  	.then(assignment => assignment.update(req.body))
	  	.then(assignment => res.json(assignment))
	  	.catch(next))

