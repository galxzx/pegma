import React from 'react'
import {Link} from 'react-router'

import Login from './Login'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: ''
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggleModal(md) {
    this.setState({ modal: md})
  }

  closeModal() {
    this.setState({ modal: ''})
  }

  render() {
  	return (
        <section className="index-container">
          <div className="index-content">
            <h1>Pegma</h1>
            <h4>Catchy tag line comes here</h4>
            <nav>
              <button className="btn btn-login" onClick={()=>this.toggleModal('login')}>Log in</button>
              <button className="btn btn-signup" onClick={()=>this.toggleModal('signup')}>Sign up</button>
            </nav>
            {
              (this.state.modal) ? (
                <div className="modal modal-home">
                  <div className="modal-close" onClick={()=>this.closeModal()}>x</div>
                    <div className="modal-content">
                      {
                        (this.state.modal === 'login') ? (
                          <Login />
                        ) : null
                      }
                      {
                        (this.state.modal === 'signup') ? (
                          <h1>Testing SU</h1>
                        ) : null
                      }
                    </div>
                  </div>
              ) : null
            }
          </div>
        </section>
    )
  }
}

export default Home
