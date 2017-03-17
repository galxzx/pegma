'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Assignment = db.define('assignments', {
  title: Sequelize.STRING, // duplicate of quiz/task models...but needed for state
  due_date: Sequelize.DATE,
  status: {
    type: Sequelize.ENUM('assigned', 'doing', 'completed', 'archive'),
    defaultValue: 'future'
  },
  notes: Sequelize.STRING,
  grade: Sequelize.FLOAT,
  ETC: Sequelize.FLOAT,
  type: Sequelize.ENUM('task', 'quiz'),
  reward: Sequelize.INTEGER
}, {
  hooks: {
    beforeCreate: (assignment) => {
      if(assignment.type === 'quiz' && !assignment.quiz_id) 
      throw new Error(`A assignment of type 'quiz' must have a quiz_id!`)
    }
  }  
})

// Assignment belongsTo Task
// Assignment belongsTo Student

module.exports = Assignment
