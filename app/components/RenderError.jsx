import React from 'react'

const RenderError = ({ meta: { touched, error } }) => touched && error ?
  <span className="formError">{error}</span> : false

export default RenderError
