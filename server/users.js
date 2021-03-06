'use strict'

const db = require('APP/db')
const User = db.model('users')
const Student = db.model('students')
const Teacher = db.model('teachers')

const {mustBeLoggedIn, forbidden, selfOnly} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
	.put('/:id', mustBeLoggedIn, selfOnly('update'),  (req, res, next) =>
		User.findById(req.params.id)
		.then(user => user.update(req.body))
		.then(user => res.json(user))
		.catch(next))
	.post('/student', (req, res, next) =>
		Student.create({teacher_id: req.body.teacher, user: req.body}, {include: [User]})
			.then(student => res.send(student))
			.catch(next))
	.post('/teacher', (req, res, next) =>
		Teacher.create({user: req.body}, {include: [User]})
			.then(teacher => res.send(teacher))
	 		.catch(next))
