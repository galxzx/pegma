import React from 'react'
import { Field } from 'redux-form'
import UpdatePasswordContainer from '../containers/UpdatePasswordContainer'




const StudentSettings = ({user, teacher, handleSubmit, updateStudent}) => {


  return (
    <div className="dashboard">
      <div className="container panel-container">

        <div className="flex-container">

          <section className="flex-child panel settings">
            <div className="panel-header">Settings</div>
            <div className="settings-content">
              <form onSubmit={handleSubmit(updateStudent)}>
                <fieldset>
                  <div className="form-group">
                    <label>Name</label><br/>
                    <Field type="text" name="name" component="input" /><br/>
                    <label>E-mail</label><br/>
                    <Field type="text" name="email" component="input" /><br/>
                    <label>Teacher</label><br/>
                    <span className="alert-inline">You are not allowed to change your teacher.</span><br/>
                    <Field type="text" name="teacher"  component="input" disabled /><br/>
                    <button type="submit" className="btn btn-primary">Update Information</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>


        </div>
        <UpdatePasswordContainer />
      </div>
    </div>
  )
}

export default StudentSettings
