'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Teacher = db.define('teachers', {
	calendar: Sequelize.STRING
})

module.exports = Teacher
