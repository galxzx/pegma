import React, { Component } from 'react'

class AlertModal extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
    this.closeTimer = setTimeout(this.props.closeAlertDispatch, 5000)
  }

  componentWillUnmount (){
    clearInterval(this.closeTimer)
  }

  render() {
    const { alert } = this.props
    console.log('alert', alert)
    console.log('props', this.props)

    return (
      <div className="alert">
        {alert}
      </div>
    )
  }
}

export default AlertModal
