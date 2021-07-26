import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const deckOfCards = useSelector(state => state.card)
const { id } = useParams()
const thisDeck = Object.values(deckOfCards).filter(card => card.deckId===id)


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

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
        <button type="button" onClick={() => fields.remove(index)}>
          Remove Card
        </button>
        <h4>Card #{index + 1}</h4>
        <Field
          name={`${card}.question`}
          type="text"
          component={renderField}
          label="Question"
        />
        <Field
          name={`${card}.answer`}
          type="text"
          component={renderField}
          label="Answer"
        />
      </li>
    ))}
  </ul>
);

const MyForm = ({ handleSubmit, pristine, reset, submitting })  => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="cards" component={renderCards} />
      <div>
        <button type="submit" disabled={submitting}>
          Save Deck
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MyForm"
})(MyForm);