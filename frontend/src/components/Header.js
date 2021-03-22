import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks () {
    if(this.props.authenticated){
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/exercises'>Exercises</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/createExercise'>Create Exercise Log</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/signout'>Sign Out</Link>
          </li>
        </ul>
      )
    }
      else {
        return (
           <ul className="navbar-nav mr-auto">
          
          <li className="nav-item">
            <Link className="nav-link" to='/signup'>Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/signin'>Sign In</Link>
          </li>
        </ul>
        )
      }
  }
  render(){
    return(
      // <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand mb-0 h1" to='/'>Exercise Tracker</Link>
        {this.renderLinks()}
      </nav>
      // </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);