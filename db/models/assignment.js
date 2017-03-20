'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Assignment = db.define('assignments', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  due_date: Sequelize.DATE,
  status: {
    type: Sequelize.ENUM('assigned', 'doing', 'completed', 'archived'),
    defaultValue: 'assigned'
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'no description'
  },
  label: {
    type: Sequelize.STRING,
    defaultValue: 'no label'
  },
  grade: Sequelize.FLOAT,
  ETC: Sequelize.FLOAT, // Estimated Time to Completion
  type: {
    type: Sequelize.ENUM('task', 'quiz'),
    validate: {
      hasAssociationId: function(value) {
        if (value === 'quiz' && !Assignment.quiz_id) throw new Error(`A assignment of type 'quiz' must have a quiz_id!`)
      }
    }
  },
  reward: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  quiz_answers: {
    type: Sequelize.JSON,
    defualtValue: {}
  }
}, {
  getterMethods: {
    snippet: function () {
      if (this.description.length > 40) return this.description.slice(0, 41) + '...'
      else return this.description
    },
    formattedDate: function() {
      if (this.due_date) { 
        return (this.due_date.getMonth() + 1) + '/' + this.due_date.getDate()
      }
      else return '-'
    },
    overdue: function() {
      const now = new Date()
      if (this.due_date < now) return true
      else return false
    }
  }
})

// Assignment belongsTo Task
// Assignment belongsTo Student

module.exports = Assignment
