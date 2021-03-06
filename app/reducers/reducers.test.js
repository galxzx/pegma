import {expect} from 'chai'
import {createStore} from 'redux'
import rootReducer from './index'
import {openAlert, closeAlert, setAlert} from './alert'
import {toggleChatbox} from './chatbox'

describe('Root Reducer', () => {


  let testStore
  beforeEach('Create testing store', () => {
    testStore = createStore(rootReducer)
  })

  describe('Alert Reducer', () => {
    it('has expected initial state', () => {
      expect(testStore.getState().alert).to.deep.equal({isOpen: false, message: 'something you want to know' })
    })

    it('changes message in state', () => {
      testStore.dispatch({type: 'SET_ALERT', message: 'New Message'})
      const newState = testStore.getState()
      expect(newState.alert.message).to.equal('New Message')
    })

    describe('Alert Action Creators', () => {

      it('openAlert opens alert', () => {
        expect(openAlert()).to.deep.equal({type: 'OPEN_ALERT', isOpen: true})
      })

      it('closeAlert closes alert', () => {
        expect(closeAlert()).to.deep.equal({type: 'CLOSE_ALERT', isOpen: false})
      })

      it('setAlert sets the alert message', () => {
        expect(setAlert('New Alert Message')).to.deep.equal({type:'SET_ALERT', message:'New Alert Message'})
      })

    })
  })


  describe('Chatbox Reducer', () => {
    it('has expected initial state', () => {
      expect(testStore.getState().chatbox).to.deep.equal({open: false})
    })

    it('toggles state', () => {
      testStore.dispatch({type: 'TOGGLE_CHATBOX'})
      const newState = testStore.getState()
      expect(newState.chatbox.open).to.equal(true)
    })

    describe('Chatbox Action Creators', () => {

      it('toggleChatbox creates action', () => {
        expect(toggleChatbox()).to.deep.equal({type: 'TOGGLE_CHATBOX'})
      })

    })
  })

  describe('Tracker Reducer', () => {
    it('has expected initial state', () => {
      expect(testStore.getState().tracker).to.deep.equal({board: {lanes: [
    {id:'assigned', title: 'assigned', label: 'assigned', cards:[]},
    {id:'doing', title: 'doing', label: 'doing', cards:[]},
    {id:'completed', title: 'completed', label: 'completed', cards:[]},
    {id:'archived', title: 'archived', label: 'archived', cards:[]}
  ]}})
    })


  })

})
