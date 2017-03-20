'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Question = db.define('questions', {
 	inquiry: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	answer: {
		type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
	},
  solution: { //should correspond to array index of correct answer
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Question
