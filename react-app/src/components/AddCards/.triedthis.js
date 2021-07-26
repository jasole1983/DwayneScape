import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
// import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderCards = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Card
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((card, index) => (
      <li key={index}>
        <h4>Card #{index + 1}</h4>
        <Field
          name={`${card}.question`}
          type="text"
          component="textarea"
          label="Question"
        />
        <Field
          name={`${card}.answer`}
          type="text"
          component="textarea"
          label="Answer"
        />
        <button
          type="button"
          title="Remove Card"
          onClick={() => fields.remove(index)}
        />
      </li>
    ))}
  </ul>
)

const FieldArraysForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="Deck Title"
        type="text"
        component={renderField}
        label="Deck Title"
        // autofilled={`${deck.title}`}
      />
      <FieldArray name="cards" component={renderField} />
      <div>
        <button type="submit" disabled={submitting}>
          Save Deck
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
})(FieldArraysForm)



