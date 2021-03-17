import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Exercise = props => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
    </tr>
  )
}

export default class ExerciseList extends Component {
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
        </table>
      </div>
    )
  }
}