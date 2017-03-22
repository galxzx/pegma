import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import RenderField from './RenderField'

const CreateQuestions = ({ fields, meta: { touched, error } }) => (
  <ul>

    <button type="button" onClick={() => fields.push({})}>Add Question</button>



    {fields.map((question, index) =>
      <li key={index}>

        <h4>Question #{index + 1}</h4>
         <button
          type="button"
          title="Remove Last Question"
          onClick={() => fields.remove(index)}>Remove Question</button>
          {touched && error && <span>{error}</span>}
        <Field
          name={`${question}.inquiry`}
          type="text"
          component={RenderField}
          label="Question"/>
        <Field
          name={`${question}.a_0`}
          type="text"
          component={RenderField}
          label="Answer #1"/>
        <Field
          name={`${question}.a_1`}
          type="text"
          component={RenderField}
          label="Answer #2"/>
          <Field
          name={`${question}.a_2`}
          type="text"
          component={RenderField}
          label="Answer #3"/>
          <Field
          name={`${question}.a_3`}
          type="text"
          component={RenderField}
          label="Answer #4"/>
          <div>
            <label>Solution </label>
              <Field name={`${question}.solution`} component="select">
                <option></option>
                {[1,2,3,4].map(solution =>
                  (
                    <option key={solution} value={solution}>{solution}</option>
                  )
                )}
              </Field>
          </div>

      </li>
    )}
  </ul>
)

export default CreateQuestions
