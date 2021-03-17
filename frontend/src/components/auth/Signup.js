import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../../actions';

class Signup extends Component {
  // after the uer successfully signs up, we want to redirect the user to the Feature page
  // inside the onSubmit handler, where we are calling the signup action creator
  // we pass a second argument (a callback) to the signup action creator that is called inside onSubmit.
  // this callback is automaticalled called up after the user successfully signs up.
  // Inside this callback function we do the navigation step that will send user to the feature route
  // To automatically redirect our user we are going to get that props object to get the history prop that we get provided by redux router
  onSubmit = (formProps) => {
    // console.log(formProps);
    this.props.signup(formProps, () => {
      // send the user to the feature route
      this.props.history.push('/exercises');
    });
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Name</label>
          <Field name="name" type="text" component="input" autoComplete="none" required minLength="3" />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none" required />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="passsword" component="input" autoComplete="none" required />
        </fieldset>
        {/* Print the Error message inside the form */}
        <div style={{color:"red"}}>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    )
  }
}

function mapStateToProps (state){
  return { errorMessage: state.auth.errorMessage };
}

// export default reduxForm({ form: 'signup'})(Signup);

// compose allows us to apply multiple HO Components to a single component with a much more attrative syntax.
export default compose(
  // list out all the HO components that you want to be applied to Signup
  // connect(null, actions),
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);

