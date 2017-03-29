import {connect} from 'react-redux'
import React, { Component } from 'react'

import AlertModal from '../components/AlertModal'
import { closeAlertDispatch } from '../reducers/alert'

const findAge = time => {
  let current = Date.now()
  let timediff = current-time
  return Math.ceil(timediff/1000/60)
}

class AlertModalContainer extends Component {






  render () {
    if(!this.props.isOpen) return null

    return (
      <AlertModal {...this.props} />
    )
  }
}


const mapState = (state) => ({
  isOpen: state.alert.isOpen,
  alert: state.alert.message
})

const mapDispatch = {closeAlertDispatch}

export default connect(mapState, mapDispatch)(AlertModalContainer)
