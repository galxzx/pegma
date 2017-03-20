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
        due_date: '2016-11-13 17:00:00-07',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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

    it('has as snippet getterMethod that returns the correct string', function () {
      expect(assignment.snippet).to.equal('Lorem Ipsum is simply dummy text of the p...')
    })

    it('has as formattedDate getterMethod that returns the correct string', function () {
      expect(assignment.formattedDate).to.equal('11/13')
    })

    it('has as overdue getterMethod that returns a boolean', function () {
      expect(assignment.overdue).to.equal(true)
    })

  })
})
