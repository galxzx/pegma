'use strict'

const db = require('APP/db')
// const Student = db.model('students')
// const Assignment = db.model('assignments')
// const Teacher = db.model('teachers')
const Quiz = db.model('quizzes')
const Question = db.model('questions')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/quizzes', mustBeLoggedIn, (req, res, next) => 
		Quiz.findAll({include:[Question]})
		.then(quizzes => res.json(quizzes))
		.catch(next))
	.get('/tasks', mustBeLoggedIn, (req, res, next) => 
		Quiz.findAll({})
		.then(tasks => res.json(tasks))
		.catch(next))
