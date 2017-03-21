import React from 'react'
import { Field } from 'redux-form'


const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/><br/>
      {touched && error && <span><span className="icon icon-burst-new blue"></span><span className="formError">{error}</span></span>}
    </div>
  </div>
)

const UpdatePassword = ({handleSubmit, updatePassword}) => {


  return (


        <div className="flex-container">

          <section className="flex-child panel settings">
            <div className="panel-header">Change Password</div>
            <div className="settings-content">
              <form onSubmit={handleSubmit(updatePassword)}>
                <fieldset>
                  <div className="form-group">

                    <Field type="text" name="password" label="Old Password" component={renderField} /><br/>

                    <Field type="text" name="newPwd" label="New Password" component={renderField} /><br/>


                    <Field type="text" name="verPwd" label="Verify Password" component={renderField}  /><br/>
                    <button type="submit" className="btn btn-primary">Update Password</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>

        </div>

  )
}

export default UpdatePassword
