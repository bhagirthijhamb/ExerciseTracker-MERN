import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/userActions';

class Signin extends Component {
  // after the uer successfully signs up, we want to redirect the user to the Feature page
  // inside the onSubmit handler, where we are calling the signup action creator
  // we pass a second argument (a callback) to the signup action creator that is called inside onSubmit.
  // this callback is automaticalled called up after the user successfully signs up.
  // Inside this callback function we do the navigation step that will send user to the feature route
  // To automatically redirect our user we are going to get that props object to get the history prop that we get provided by redux router
  onSubmit = (formProps) => {
    // console.log(formProps);
    this.props.signin(formProps, () => {
      // send the user to the feature route
      this.props.history.push('/exercises');
    });
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Sign In</h3>
        {/* <div className="form-group">
          <fieldset>
            <label>Name:</label>
            <Field className="form-control" name="name" type="text" component="input" autoComplete="none" required minLength="3" />
          </fieldset>
        </div> */}
        <div className="form-group">
          <fieldset>
            <label>Email</label>
            <Field className="form-control" name="email" type="text" component="input" autoComplete="none" />
          </fieldset>
          </div>
        <div className="form-group">
          <fieldset>
            <label>Password</label>
            <Field className="form-control" name="password" type="passsword" component="input" autoComplete="none" />
          </fieldset>
        </div>
          {/* Print the Error message inside the form */}
          <div style={{color:"red"}}>{this.props.errors.message}</div>
          
        <div className="form-group">
          <button className="btn btn-primary mt-3">Sign In!</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps (state){
  return { errors: state.auth.errors };
}

// export default reduxForm({ form: 'signup'})(Signup);

// compose allows us to apply multiple HO Components to a single component with a much more attrative syntax.
export default compose(
  // list out all the HO components that you want to be applied to Signup
  // connect(null, actions),
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);

