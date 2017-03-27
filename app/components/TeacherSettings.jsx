import React from 'react'
import { Field } from 'redux-form'
import UpdatePasswordContainer from '../containers/UpdatePasswordContainer'
import RenderField from './RenderField'
import RenderError from './RenderError'

const TeacherSettings = ({user, handleSubmit, updateTeacher}) => {
  console.log(user)
  return (
    <div className="dashboard dashboard-teacher">
      <div className="container panel-container settings">
        <div className="flex-container">
          <div className="flex-child panel">
            <div className="panel-header">Settings</div>
            <section className="">
              <div className="settings-content">
              <form onSubmit={handleSubmit(updateTeacher)}>
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
    </div>
  )
}

export default TeacherSettings
