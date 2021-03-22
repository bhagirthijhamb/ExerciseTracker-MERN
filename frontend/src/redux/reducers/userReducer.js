import { LOADING_USERS, GET_USERS } from '../types';

const INITIAL_STATE = {
  loading: false,
  users: [],
  errors: {}

}

export default function (state=INITIAL_STATE, action){
  switch(action.type){
    case LOADING_USERS:
      return { ...state, loading: true }
    case GET_USERS:
      return { ...state, users: action.payload, loading: false }
    default:
      return state
  }
}