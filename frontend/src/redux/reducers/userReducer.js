import { LOADING_USERS, GET_USERS } from '../types';

const INITIAL_STATE = {
  loading: false,
  users: []
}

export default function (state=INITIAL_STATE, action){
  switch(action.type){
    case LOADING_USERS:
      return { ...state, loading: !state.loading }
    case GET_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}