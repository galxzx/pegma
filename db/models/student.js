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
    }
  }
})

module.exports = Student
