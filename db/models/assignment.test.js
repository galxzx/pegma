'use strict'

const db = require('APP/db')
const Assignment = require('./assignment')
const {expect} = require('chai')

describe('Assignment', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('the Assignment model', () => {

    let assignment

    beforeEach(function () {
      assignment = Assignment.build({
        title: 'Astrology Quiz #1',
        type: 'quiz',
        quiz_id: 1,
      })
    })

    it('has a title field', function () {
      expect(assignment.title).to.equal('Astrology Quiz #1')
    })

    it('has \'assigned\' as a status field when status was not defined', function () {
      expect(assignment.status).to.equal('assigned')
    })

    it('has a quiz id when type field is set as \'quiz\'', function () {
      expect(assignment.type).to.equal('quiz')
      expect(assignment.quiz_id).to.be.a('number')
    })

    it('has 0 as default reward value', function () {
      expect(assignment.reward).to.equal(0)
    })

  })
})
