import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      // <div>
      <nav className="navbarStyle navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/'>Exercise Tracker</Link>
        <Link to='/exercises'>Exercises</Link>
        <Link to='/createExercise'>Create Exercise Log</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signout'>Sign Out</Link>
      </nav>
      // </div>
    )
  }
}

export default Header;