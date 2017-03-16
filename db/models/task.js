'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')


const Task = db.define('tasks', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  grade_level: {
  	type: Sequelize.INTEGER,
  	defaultValue: 1
  },
  subject: {
  	type: Sequelize.STRING,
  	defaultValue: 'No Subject'
  }
})

//Task belongsTo Teacher

module.exports = Task
