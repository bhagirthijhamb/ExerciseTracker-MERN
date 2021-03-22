import { AUTH_USER, AUTH_ERROR } from '../types';

const INITIAL_STATE = {
  authenticated: "",
  errors: {}
}

// export default function (state = INITIAL_STATE, action) {
//   return state;
// }

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      console.log(action.payload);
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}