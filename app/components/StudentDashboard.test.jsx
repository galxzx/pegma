import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow, mount} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import StudentDashboard from './StudentDashboard'
import StudentStats from './Dashboard/StudentStats'
import StudentNotificationsPanel from './Dashboard/StudentNotificationsPanel'
import CalendarSmall from './Dashboard/CalendarSmall'
import StudentAssignmentsPanel from './Dashboard/StudentAssignmentsPanel'


describe('<StudentDashboard/>', () => {

  let root
  beforeEach('render the root', () =>
    root = shallow(<StudentDashboard />)
  )

  it('should have a Student Stats panel', () => {
    expect(root.find(StudentStats)).to.have.length(1)
  })

  it('should have a Notifications panel', () => {
    expect(root.find(StudentNotificationsPanel)).to.have.length(1)
  })

  it('should have a Calendar panel', () => {
    expect(root.find(CalendarSmall)).to.have.length(1)
  })

  it('should have a Assignments Panel', () => {
    expect(root.find(StudentAssignmentsPanel)).to.have.length(1)
  })

  it('should receive assignments as props', () => {
    expect(root.assignments).to.be.defined
  })

})
