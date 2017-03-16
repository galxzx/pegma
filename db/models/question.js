'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Question = db.define('questions', {
 	inquiry: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	answer: {
		type: Sequelize.ARRAY(Sequelize.TEXT), // Holds multiple answers or single answer. [0] should always be the correct answer
    defaultValue: []
	},
  type: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Question
