'use strict'

const db = require('APP/db')
// const Student = db.model('students')
// const Assignment = db.model('assignments')
// const Teacher = db.model('teachers')
const Quiz = db.model('quizzes')
const Question = db.model('questions')
const Task = db.model('tasks')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/quizzes', mustBeLoggedIn, (req, res, next) =>
		Quiz.findAll({include:[Question], order: ['title']})
		.then(quizzes => res.json(quizzes))
		.catch(next))
  .get('/quizzes/:quizId', mustBeLoggedIn, (req, res, next) =>
    Quiz.findById(req.params.quizId, {include: [Question]})
      .then(quiz => res.json(quiz))
       .catch(next))
	.get('/tasks', mustBeLoggedIn, (req, res, next) =>
		Task.findAll({order: ['title']})
		.then(tasks => res.json(tasks))
		.catch(next))
  .get('/tasks/:taskId', mustBeLoggedIn, (req, res, next) =>
    Task.findById(req.params.taskId)
      .then(task => res.json(task))
      .catch(next))
  .post('/quiz', (req, res, next) =>
    Quiz.create(req.body, {include:[Question]})
      .then(quiz => res.send(quiz))
      .catch(next))
  .post('/task', (req, res, next) =>
    Task.create(req.body)
    .then(task => res.send(task))
    .catch(next))
