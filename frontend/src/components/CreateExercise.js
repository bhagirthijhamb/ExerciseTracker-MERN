import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsers } from './../redux/actions/userActions';
import { createExercise } from './../redux/actions/exerciseActions';

// export default class CreateExercise extends Component {
class CreateExercise extends Component {
  state = {
    // username: '',
    // description: '',
    // duration: 0,
    // date: new Date()
  }
  componentDidMount(){
    this.props.getUsers();
    // if(this.props.users.length > 0){
    //   this.setState({ username: this.props.users[0].name })
    // }
  }

  // onChangeUsername = (e) => {
  //   this.setState({ username: e.target.value })
  // }

  // onChangeDescription = (e) => {
  //   this.setState({ description: e.target.value });
  // }

  // onChangeDuration = (e) => {
  //   this.setState({ duration : e.target.value });
  // }

  // onChangeDate = (date) => {
  //   this.setState({ date: date })
  // }

  onSubmit = (formProps) => {
    console.log(formProps);

    // const exercise = {
    //   username: this.state.username,
    //   description: this.state.description,
    //   duration: this.state.duration,
    //   date: this.state.date
    // }

    this.props.createExercise(formProps);
    
  }

  render(){
    // console.log('users', this.props.users);
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
            <button className="btn btn-primary">Create Exercise Log!</button>
          </div>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = state => (
//   { users: state.user.users }
// )

function mapStateToProps(state){
  return { users: state.user.users }
}

const mapActionsToProps = { 
  getUsers, 
  createExercise 
}


// export default connect(mapStateToProps, userActions)(CreateExercise);
export default compose (
  // connect(mapStateToProps, { getUsers, createExercise }),
  connect(mapStateToProps, mapActionsToProps ),
  reduxForm({ form: 'createExercise' })
)(CreateExercise);