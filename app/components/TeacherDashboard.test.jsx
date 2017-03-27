import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow, mount} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import TeacherDashboard from './TeacherDashboard'
import TeacherStats from './Dashboard/TeacherStats'
import TeacherNotificationsPanel from './Dashboard/TeacherNotificationsPanel'
import CalendarSmall from './Dashboard/CalendarSmall'
import TeacherAssignmentsPanel from './Dashboard/TeacherAssignmentsPanel'


describe('<TeacherDashboard/>', () => {

  let root
  beforeEach('render the root', () =>
    root = shallow(<TeacherDashboard />)
  )

  it('should have a Student Stats panel', () => {
    expect(root.find(TeacherStats)).to.have.length(1)
  })

  it('should have a Notifications panel', () => {
    expect(root.find(TeacherNotificationsPanel)).to.have.length(1)
  })

  it('should have a Calendar panel', () => {
    expect(root.find(CalendarSmall)).to.have.length(1)
  })

  it('should have a Assignments Panel', () => {
    expect(root.find(TeacherAssignmentsPanel)).to.have.length(1)
  })

  xit('should receive assignments as props', () => {
    expect(root.assignments).to.be.defined
  })

})
