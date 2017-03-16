'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

// Assignment model doesn't exist yet
//const Assignment = require('./assignment')

const Student = db.define('students', {
}, {
  getterMethods: {
    rewards: () => {
      let rewards = null
      // Assignment.findAll({where: {student_id: this.id}})
      //   .then(rows => rewards = rows.reduce((sum, row) => (sum + row.dataValues.reward), 0))
      return rewards
    }
  }
})

module.exports = Student

// id - created by sequelize
// user_id - created by belongsTo
// teacher_id - created by belongsTo
// rewards - created by getter method
