import React from 'react'

const RenderError = ({ meta: { touched, error } }) => touched && error ?
  <span className="icon icon-error-circle red">{error}</span> : false

export default RenderError
