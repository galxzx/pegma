'use strict'

const db = require('APP/db')
const Quiz = require('./quiz')
const {expect} = require('chai')

describe('Quiz', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('the Quiz model', () => {
  
    let quiz

    beforeEach(function (done) {
      quiz = Quiz.build({
        name: 'Astronomy Quiz',
        description: 'Answer this five questions about what we learned this week.'
      })
      done()
    })
    
    it('has a name field', function () {
      expect(quiz.name).to.equal('Astronomy Quiz')
    })      

    it('has a working description field', function () {
      expect(quiz.description).to.equal('Answer this five questions about what we learned this week.')
    })

  })
})