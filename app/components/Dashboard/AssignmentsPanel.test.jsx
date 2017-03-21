import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow, mount} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import AssignmentsPanel from './AssignmentsPanel'

describe('<AssignmentsPanel/>', () => {

  let root
  beforeEach('render the root', () =>
    root = shallow(<AssignmentsPanel />)
  )

  it('should have a select input', () => {
    expect(root.find('select')).to.have.length(1)
    expect(root.find('option')).to.have.length(4)
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
