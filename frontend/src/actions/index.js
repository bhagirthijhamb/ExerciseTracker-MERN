import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

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
export const signup = (formProps) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/users/signup', formProps);
    console.log(response);
    dispatch({ type: AUTH_USER, payload: response.data.token });
  }
  // this code will run if anything goes wrong when we try to signup with a new account 
  catch (error){
    console.log(error.response.data);
    // dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
}