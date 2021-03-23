import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './../redux/actions/userActions';

class Header extends Component {
  componentDidMount(){
    this.props.getUser()
  }
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
          <li>
            <Link className="nav-link" to='/' style={{ fontSize: 18, fontWeight: 500, color: 'white' }}>Welcome {this.props.user.name}{' '}!</Link>
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
    console.log(this.props.user.name)
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
  return { 
    authenticated: state.auth.authenticated,
    user: state.user.user
  }
}

export default connect(mapStateToProps, { getUser })(Header);