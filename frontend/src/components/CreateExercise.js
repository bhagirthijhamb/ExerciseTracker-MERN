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
    date: newDate()
  }
  componentDidMount(){
    this.props.getUsers();
    this.setState({ username: this.props.users[0].username })
  }

  render(){
    return (
      <div>
        Create Exercise
      </div>
    )
  }
}

function mapStateToProps(state){
  return { users: state.user.users }
}

export default connect(mapStateToProps, userActions)(CreateExercise);