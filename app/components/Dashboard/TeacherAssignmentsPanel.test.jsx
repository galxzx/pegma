import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow, mount} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'
import store from './../../store'
import {Provider} from 'react-redux'

import {TeacherAssignmentsPanel} from './TeacherAssignmentsPanel'

describe('<TeacherAssignmentsPanel/>', () => {

  let root
  beforeEach('render the root', () =>
    root = shallow(<TeacherAssignmentsPanel students={[]} />)
  )

  it('should have two select inputs', () => {
    expect(root.find('select')).to.have.length(2)
    expect(root.find('option')).to.have.length(12)
  })

  it('should have a local state', () => {
    expect(root.state()).to.be.defined
    expect(root.state().sort).to.equal('id')
    expect(root.state().sortedAssignments).to.have.length(0)
  })

  it('should have a handleSortChange function', () => {
    expect(root.props().handleSortChange).to.be.defined
  })

  it('should have a componentsWillReceiveProps function', () => {
    expect(root.props().componentsWillReceiveProps).to.be.defined
  })


})
