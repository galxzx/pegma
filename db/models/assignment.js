'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Assignment = db.define('assignments', {
  title: { 
    type: Sequelize.STRING, 
    defaultValue: 'Untitled'
  },
  due_date: Sequelize.DATE,
  status: {
    type: Sequelize.ENUM('assigned', 'doing', 'completed', 'archive'),
    defaultValue: 'assigned'
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'no description'
  },    
  notes: Sequelize.STRING, // remove this
  label: {
    type: Sequelize.STRING,
    defaultValue: 'no label'
  },
  grade: Sequelize.FLOAT,
  ETC: Sequelize.FLOAT,
  type: Sequelize.ENUM('task', 'quiz'),
  reward: Sequelize.INTEGER,
  quiz_answers: {
    type: Sequelize.JSON,
    defualtValue: {}
  }
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
