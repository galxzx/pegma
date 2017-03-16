'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Quiz = db.define('quizzes', {
 	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT,
		defaultValue: 'No description available.'
	}
});

module.exports = Quiz
