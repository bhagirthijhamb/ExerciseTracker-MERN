import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions';

class Signup extends Component {
  onSubmit = (formProps) => {
    console.log(formProps);
    this.props.signup(formProps);
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Name</label>
          <Field name="name" type="text" component="input" autoComplete="none" />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete="none" />
        </fieldset>
        <button>Sign Up!</button>
      </form>
    )
  }
}

// export default reduxForm({ form: 'signup'})(Signup);

// compose allows us to apply multiple HO Components to a single component with a much more attrative syntax.
export default compose(
  // list out all the HO components that you want to be applied to Signup
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(Signup);

