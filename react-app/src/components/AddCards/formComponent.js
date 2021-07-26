import React from "react";
import { Field, reduxForm } from "redux-form";

const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="question">Question</label>
      <Field name="question" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="answer">Answer</label>
      <Field name="answer" component="input" type="text" />
    </div>
    <button type="remove">Submit</button>
  </form>
);

export default reduxForm({
  form: "contact"
})(ContactForm);