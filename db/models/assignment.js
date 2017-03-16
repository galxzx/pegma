'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')


const Assignment = db.define('assignment', {
  due_date: Sequelize.DATE,
  status: {
    type: Sequelize.ENUM('future', 'assigned', 'inProgress', 'completed'),
    defaultValue: 'future'
  },
  notes: Sequelize.STRING,
  grade: Sequelize.FLOAT,
  ETC: Sequelize.FLOAT,
  type: Sequelize.ENUM('task', 'quiz'),
  reward: Sequelize.INTEGER
})

module.exports = Assignment
