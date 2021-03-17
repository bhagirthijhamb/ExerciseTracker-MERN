import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as exerciseActions from './../redux/actions/exerciseActions';

const Exercise = props => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
    </tr>
  )
}

// export default class ExerciseList extends Component {
class ExerciseList extends Component {
  componentDidMount(){
    const exercises = this.props.getExercises();
  }

  // exerciseList(){

  // }

  render(){
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.exerciseList()} */}
          </tbody>
        </table>
      </div>
    )
  }
}

// export default ExerciseList;
export default connect(null, exerciseActions)(ExerciseList);