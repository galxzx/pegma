import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import WhoAmIContainer, {WhoAmI} from './WhoAmI'

describe('<WhoAmI/>', () => {
  const user = {
    firstName: 'Dr. Bones',
    lastName: 'Potato'
  }
  const logout = spy() 
  let root
  beforeEach('render the root', () =>
    root = shallow(<WhoAmI user={user} logout={logout}/>)
  )

  it('greets the user', () => {
    expect(root.text()).to.contain('Welcome')
    expect(root.text()).to.contain(user.firstName)
    expect(root.text()).to.contain(user.lastName)
  })

  it('has a logout button', () => {
    expect(root.find('a.icon-sign-out')).to.have.length(1)
  })

  it('calls props.logout when logout is tapped', () => {
    root.find('a.icon-sign-out').simulate('click')
    expect(logout).to.have.been.called
  })
})

describe("<WhoAmI/>'s connection", () => {
  const state = {
    auth: {name: 'Dr. Bones'}
  }
  
  let root, store, dispatch
  beforeEach('create store and render the root', () => {
    store = createStore(state => state, state)
    dispatch = spy(store, 'dispatch')
    root = shallow(<WhoAmIContainer store={store}/>)
  })

  it('gets prop.user from state.auth', () => {
    expect(root.find(WhoAmI)).to.have.prop('user').eql(state.auth)
  })
})