'use strict'

const db = require('APP/db')
const Quiz = db.model('quizzes')
const Question = db.model('questions')

 module.exports = require('express').Router()
	.get('/', (req, res, next) =>
		Quiz.findAll()
		.then(quizzes => res.json(quizzes))
		.catch(next))
	.get('/:id', (req, res, next) =>
		Quiz.findById(req.params.id, {include: [Question]})
		.then(quiz => res.json(quiz))
		.catch(next))
