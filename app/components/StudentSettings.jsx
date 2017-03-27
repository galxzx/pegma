import React from 'react'
import { Field } from 'redux-form'
import UpdatePasswordContainer from '../containers/UpdatePasswordContainer'

const StudentSettings = ({user, teacher, handleSubmit, updateStudent}) => {

  return (
    <div key="StudentSettings" className="dashboard">
      <div className="container panel-container">

        <div className="flex-container">

          <section className="flex-child panel settings">
            <div className="panel-header">Settings</div>
            <div className="settings-content">
              <form onSubmit={handleSubmit(updateStudent)}>
                <fieldset>
                  <div className="form-group settings-form">
                    <div className="flex-child">
                      <img src={user.imageUrl} /><br/>
                      <label>Avatar URL</label><br/>
                      <span className="alert-inline">Your new image must be a url.</span>
                      <Field type="text" name="avatar" component="input" /><br/>
                    </div>
                    <div className="flex-child">
                      <label>First Name</label><br/>
                      <Field type="text" name="firstName" component="input" /><br/>
                      <label>Last Name</label><br/>
                      <Field type="text" name="lastName" component="input" /><br/>
                      <label>E-mail</label><br/>
                      <Field type="text" name="email" component="input" /><br/>
                      <label>Teacher</label><br/>
                      <span className="alert-inline">You are not allowed to change your teacher.</span><br/>
                      <Field type="text" name="teacher"  component="input" disabled /><br/>
                      <button type="submit" className="btn btn-primary">Update Information</button>
                    </div>
                  </div>
                </fieldset>
              </form>
              <UpdatePasswordContainer />
            </div>
          </section>
          
        </div>
        
      </div>
    </div>
  )
}

export default StudentSettings
