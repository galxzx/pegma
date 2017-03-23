'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Assignment = require('./assignment')

const Student = db.define('students', {
}, {
  getterMethods: {
    rewards: () => {
      let rewards = null
      Assignment.findAll({where: {student_id: this.id}})
        .then(rows => rewards = rows.reduce((sum, row) => (sum + row.dataValues.reward), 0))
      return rewards
    },
    studentStats: () => {
      const stats = {'assigned':0, 'doing':0, 'completed':0, 'archived':0}
      Assignment.findAll({where: {student_id: 1}})
      .then(assignments => {
        assignments.forEach(assignment => stats[assignment.status]++)
        // return stats
      })
			return stats      
    }  
  }
})

module.exports = Student
