import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getOneExercise } from './../../redux/actions/exerciseActions';
import { getUsers } from './../../redux/actions/userActions';

class EditExercise extends Component {
  componentDidMount(){
    this.props.getUsers();
    this.props.getOneExercise(this.props.match.params.id)
  }

  render(){
    console.log(this.props.initialValues);
    return(
      <div>
        <h3>Edit Exercise Log</h3>
        <form 
        // onSubmit={handleSubmit(this.onSubmit)}
        >
          <div className="form-group">
            <fieldset>
              <label>Username:</label>
              <Field required value="user.email" name="username" className="form-control" component="select" type="text" minLength="3">
                {this.props.users.map(user => {
                  return <option key={user.email} value={user.email}>{user.email}</option>
                })}
              </Field>
            </fieldset>
          </div>

          <div className="form-group">
            <fieldset>
              <label>Description:</label>
              <Field name="description" type="text" component="input" autocomplete="none" className="form-control" required />
            </fieldset>
          </div>

          <div className="form-group">
            <fieldset>
              <label>Duration:</label>
              <Field name="duration" type="text" component="input" autocomplete="none" className="form-control" required />
            </fieldset>
          </div>

          <div className="form-group">
            <fieldset>
              <label>Date:</label>
              <Field name="date" type="date" component="input" autocomplete="none" className="form-control" required>
              </Field>
            </fieldset>
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Edit Exercise Log!</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { initialValues: state.exercise.exercise, users: state.user.users }
)

const mapActionsToProps = {
  getOneExercise, getUsers
}

export default compose(
  connect(mapStateToProps, mapActionsToProps),
  reduxForm(
    { form: 'editExercise', enableReinitialize: true })
)(EditExercise);