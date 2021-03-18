import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      // <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand mb-0 h1" to='/'>Exercise Tracker</Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/exercises'>Exercises</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/createExercise'>Create Exercise Log</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/signup'>Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/signin'>Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/signout'>Sign Out</Link>
          </li>
        </ul>
      </nav>
      // </div>
    )
  }
}

export default Header;