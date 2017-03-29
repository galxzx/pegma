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
            <img className="logo-home" src="/images/pegma-logo.svg"/>
            <h4>New ways to teach. New ways to learn.</h4>
              {
                !this.props.user ?
                  (
                    <nav>
                      <button className="btn btn-login" onClick={()=>this.toggleModal('login')}>Log in</button>
                      <Link to="/signup"><button className="btn btn-signup">Sign up</button></Link>
                    </nav>
                  ) : (
                    <nav>
                      {
                        this.props.user.student_id ?
                        (
                          <Link to="/student/dashboard"><button className="btn btn-signup">Go to Dashboard</button></Link>
                        ) :
                        (
                          <Link to="/teacher/dashboard"><button className="btn btn-signup">Go to Dashboard</button></Link>
                        )
                      }
                    </nav>
                  )
              }
            {
              (this.state.modal !== 'login') ? null : !this.props.user ? (
                <div className="modal modal-home">
                  <div className="modal-close" onClick={()=>this.closeModal()}>x</div>
                    <div className="modal-content">
                          <Login />
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
