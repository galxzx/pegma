import {expect} from 'chai'
import {createStore} from 'redux'
import rootReducer from './index'
import {openAlert, closeAlert, setAlert} from './alert'

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

})
