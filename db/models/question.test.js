'use strict'

const db = require('APP/db')
const Question = require('./question')
const {expect} = require('chai')

describe('Question', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('the Question model', () => {

    let question

    beforeEach(function () {
      question = Question.build({
        inquiry: 'What is the second planet in the Solar System?',
        answer: ['Mercury', 'Venus', 'Earth', 'Mars'],
        type: 'Multiple Choice',
        solution: 1
      })
    })

    it('has a inquiry field', function () {
      expect(question.inquiry).to.equal('What is the second planet in the Solar System?')
    })

    it('has a array as answers field', function () {
      expect(question.answer).to.be.an('array')
      expect(question.answer).to.have.length(4)
      expect(question.answer[0]).to.equal('Mercury')
    })

    it('has a number as solution field', function () {
      expect(question.solution).to.be.an('number')
      expect(question.solution).to.equal(1)
    })

    it('has a string as type field', function () {
      expect(question.type).to.equal('Multiple Choice')
    })

  })
})
