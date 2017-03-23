'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Quiz = db.define('quizzes', {
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
  }	
});

module.exports = Quiz
