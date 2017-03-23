'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Task = db.define('tasks', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'No description available.'
  },
  grade_level: {
  	type: Sequelize.INTEGER,
  	defaultValue: 1
  },
  subject: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  topic: {
  	type: Sequelize.STRING,
  	defaultValue: 'General'  	
  }
})

//Task belongsTo Teacher

module.exports = Task
