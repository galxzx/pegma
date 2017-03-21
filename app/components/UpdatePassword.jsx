import React from 'react'
import { Field } from 'redux-form'




const UpdatePassword = ({handleSubmit, settingsSubmit}) => {


  return (
    <div className="dashboard">
      <div className="container panel-container">

        <div className="flex-container">

          <section className="flex-child panel settings">
            <div className="panel-header">Settings</div>
            <div className="settings-content">
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <div className="form-group">
                    <label>Old Password</label><br/>
                    <Field type="text" name="oldPwd" component="input" /><br/>
                    <label>New Password</label><br/>
                    <Field type="text" name="newPwd" component="input" /><br/>
                    <label>Verify Password</label><br/>

                    <Field type="text" name="verPwd"  component="input"  /><br/>
                    <button type="submit" className="btn btn-primary">Update Password</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default UpdatePassword
