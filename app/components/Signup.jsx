import React from 'react'
import { Field } from 'redux-form'
import RenderField from './RenderField'

const RenderError = ({ meta: { touched, error } }) => touched && error ?
  <span className="formError">{error}</span> : false

const Signup = ({handleSubmit, typeValue, teachers, createAccount}) => {

  return (
    <div className="dashboard">
      <div className="container panel-container">

        <div className="flex-container">

          <section className="flex-child panel settings">
            <div className="panel-header">New Account</div>
            <div className="settings-content">
              <form onSubmit={handleSubmit(createAccount)}>
                <fieldset>
                  <div className="form-group">

                    <Field type="text" name="name" label="Name" component={RenderField} /><br/>

                    <Field type="text" name="email" label="Email" component={RenderField} /><br/>

                    <Field type="text" name="password" label="Password" component={RenderField} /><br/>

                    <Field type="text" name="verPwd" label="Verify Password" component={RenderField} /><br/>

                    <div>
                      <label>Account Type</label>
                      <div>
                        <label>
                          <Field name="type" component="input" type="radio" value="student"
                            checked={typeValue && typeValue === 'student'} /> Student
                          </label><br/>
                        <label>
                          <Field name="type" component="input" type="radio" value="teacher"
                          checked={typeValue && typeValue === 'teacher'} /> Teacher
                        </label><br/>
                        <Field name="type" component={RenderError} />
                      </div>
                    </div>

                    {typeValue === 'student' &&
                      <div>
                        <label>Please Select Your Teacher</label><br/>
                        <Field name="teacher" component="select">
                          <option></option>
                          {teachers.map(teacher =>
                            <option key={teacher.id} value={teacher.id}>{teacher.user.name}</option>
                            )}
                        </Field>
                      </div>
                    }

                    <button type="submit" className="btn btn-primary">Signup</button>
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

export default Signup
