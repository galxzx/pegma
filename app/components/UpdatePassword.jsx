import React from 'react'
import { Field } from 'redux-form'


const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/><br/>
      {touched && error && <span><span className="icon icon-error-circle red"></span><span className="formError">{error}</span></span>}
    </div>
  </div>
)

const UpdatePassword = ({handleSubmit, updatePassword}) => {

  return (
    <div className="settings-content">
      <form onSubmit={handleSubmit(updatePassword)}>
        <fieldset>
          <div className="form-group settings-form">
            <div className="flex-child"></div>
            <div className="flex-child">
              <h3>Update Your Password</h3>
              <Field type="text" name="password" label="Old Password" component={renderField} /><br/>
              <Field type="text" name="newPwd" label="New Password" component={renderField} /><br/>
              <Field type="text" name="verPwd" label="Verify Password" component={renderField}  /><br/>
              <button type="submit" className="btn btn-primary">Update Password</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default UpdatePassword
