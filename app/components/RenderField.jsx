import React from 'react'

const RenderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span><span className="icon icon-error-circle red"></span><span className="formError">{error}</span></span>}
    </div>
  </div>
)

export default RenderField
