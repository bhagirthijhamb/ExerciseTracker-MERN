// requireAuth - convention that by default we are exporting a function
// Signup - convention that by default we are exporting a Class
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  // inside the body of the function, we define a class
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount(){
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate(){
      this.shouldNavigateAway();
    }

    shouldNavigateAway(){
      if(!this.props.auth){
        this.props.history.push('/');
      }
    }

    render(){
      return <ChildComponent { ...this.props} />
    }
  }

  function mapStateToProps(state){
    return { auth: state.auth.authenticated }
  }

  return connect(mapStateToProps)(ComposedComponent)
}