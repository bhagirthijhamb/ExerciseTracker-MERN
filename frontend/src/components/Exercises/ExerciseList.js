import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as exerciseActions from './../../redux/actions/exerciseActions';
import requireAuth from './../auth/requireAuth';

const Exercise = props => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={'/editExercise/' + props.exercise._id}>edit</Link> | {" "}
        <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>delete</a>
      </td>
    </tr>
  )
}

// export default class ExerciseList extends Component {
class ExerciseList extends Component {
  componentDidMount(){
    this.props.getExercises();
  }
  
  exerciseList(){
    return this.props.exercise.exercises.map(exercise => {
      return <Exercise exercise={exercise} 
        deleteExercise={this.props.deleteExercise} 
        key={exercise._id} />
    })
  }
    
  render(){
    const { loading, exercises } = this.props.exercise;
    console.log(loading);

    // if(this.props.exercise){
    //   console.log(this.props.exercise.exercises);
    // }

    const exerciseMarkup = loading ? (
      <h3>...Loading</h3>
    ) : (
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
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )

    return (
      <div>
        {exerciseMarkup}
      </div>
    )
  }
}

function mapStateToProps (state){
  console.log(state);
  return { exercise: state.exercise }
}

// export default ExerciseList;
// export default connect(mapStateToProps, exerciseActions)(ExerciseList);

export default compose(
  connect(mapStateToProps,  exerciseActions ),
)(requireAuth(ExerciseList));