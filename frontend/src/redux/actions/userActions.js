import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, LOADING_USERS, GET_USERS } from '../types';

// we are not trying to chain up to a promise just yet
// we are just calling the signup action creator and seeing if we can signup successfully
// we are not trying to retirieve the json web token or anything like that (like dispatch an action).
// export const signup = ({ email, password }) => dispatch => {
//   axios.post('http://localhost:3090/signup', {
//     email, password
//   })
// }

// test for CORS
// export const signup = (formProps) => (dispatch) => {
//   axios.post('http://localhost:3090/users/signup', formProps)
// }

// If the user tries to signup with the email that is already taken, an error is thrown from our backend server
// To display errors like this in the frontend, when we are using async await syntax, we can catch the errors that are thrown  from our request by wrapping it with a try catch statement.
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/users/signup', formProps);
    // console.log(response.data);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('ETtoken', response.data.token);
    // after we get back the response and 
    // after we dispatch an action saying the user is now signed in
    // we call that call back
    callback()
  }
  // this code will run if anything goes wrong when we try to signup with a new account 
  catch (error){
    console.log(error.response.data);
    // dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/users/signin', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('ETtoken', response.data.token);
    callback()
  }
  catch (error){
    console.log(error.response.data);
    // dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
}

export const getUsers = () => async dispatch => {
  try {
    dispatch({ type: LOADING_USERS })
    const response = await axios.get('http://localhost:3090/users');
    console.log(response);
    dispatch({ type: GET_USERS, payload: response.data })
    dispatch({ type: LOADING_USERS })
  } catch(error){
    console.log(error.response)
  }
}

// simple (not complex action creator where we get access to that dispatch function with redux-thunk
// just because we do not expect this to have any need for asynchronous dispatch
// in other words, we are not going to make any request inside of this action creator.
// so it will be a normal synchronous action creator.
export const signout = () => {
  // clear the local storeage of the 'ETtoken' property
  localStorage.removeItem('ETtoken');

  // return an action of type AUTH_USER (same type as we used for signinup the user)
  // AUTH_USER all it does is flip the authenticated piece of state in our auth reducer
  // here r/t setting the authenticated piece of state to some JSON token, we set it to an empty string.
  // which essentialy mean- sign the user out by clearing the authenticated piece of state
  return {
    type: AUTH_USER,
    payload: ''
  }
}