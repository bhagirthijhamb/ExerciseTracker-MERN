import { LOADING_DATA, GET_EXERCISES } from './../types';

const INITIAL_STATE = {
  loading: false,
  exercises: []
}

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    case LOADING_DATA:
      return { ...state, loading: !state.loading }
    case GET_EXERCISES:
      // console.log(action.payload)
      return { ...state, exercises: action.payload }
    default:
      return state
  }
}