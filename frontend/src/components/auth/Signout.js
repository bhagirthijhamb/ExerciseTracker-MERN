import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../redux/actions/userActions';

class Signout extends Component {
  componentDidMount(){
    this.props.signout();
  }

  render(){
    return(
      <div className="signout">
        <h3 className="signoutMessage">Sorry to see you go.</h3>
      </div>
    )
  }
}

export default connect(null, actions)(Signout);
