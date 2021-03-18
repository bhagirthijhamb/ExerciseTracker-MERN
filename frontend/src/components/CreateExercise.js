import React, {Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import * as userActions from './../redux/actions/userActions';

// export default class CreateExercise extends Component {
class CreateExercise extends Component {
  state = {
    username: '',
    description: '',
    duration: 0,
    date: new Date()
  }
  componentDidMount(){
    this.props.getUsers();
    if(this.props.users.length > 0){
      this.setState({ username: this.props.users[0].name })
    }
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  }

  onChangeDuration = (e) => {
    this.setState({ duration : e.target.value });
  }

  onChangeDate = (date) => {
    this.setState({ date: date })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }
    
  }

  render(){
    console.log(this.props.users)
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        {/* <form onSubmit={handleSubmit(this.onSubmit)}>
          fied
        </form> */}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { users: state.user.users }
}

export default connect(mapStateToProps, userActions)(CreateExercise);