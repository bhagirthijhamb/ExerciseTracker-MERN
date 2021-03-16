import axios from 'axios';
import { AUTH_USER } from './types';

// we are not trying to chain up to a promise just yet
// we are just calling the signup action creator ans seeing if we can signup successfully
// we are not trying to retirieve the json web token or anything liek that (like dispatch an action).
// export const signup = ({ email, password }) => dispatch => {
//   axios.post('http://localhost:3090/signup', {
//     email, password
//   })
// }

export const signup = (formProps) => (dispatch) => {
  axios.post('http://localhost:3090/users/signup', formProps)
}