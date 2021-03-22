import { LOADING_USERS, GET_USERS, SET_USER } from '../types';

const INITIAL_STATE = {
  loading: false,
  users: [],
  errors: {},
  user: {}
}

export default function (state=INITIAL_STATE, action){
  switch(action.type){
    case LOADING_USERS:
      return { ...state, loading: true }
    case GET_USERS:
      return { ...state, users: action.payload, loading: false }
    case SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}