'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')


const Task = db.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Task
