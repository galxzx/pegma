'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Teacher = db.define('teachers', {})

module.exports = Teacher

// id - created by sequelize
// user_id - created by belongsTo