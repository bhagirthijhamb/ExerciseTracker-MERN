import { LOADING_DATA, GET_EXERCISES, DELETE_EXERCISE } from './../types';

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
    case DELETE_EXERCISE:
      const index = state.exercises.findIndex(exercise => exercise._id === action.payload);
      state.exercises.splice(index, 1);
      return { ...state }
    default:
      return state
  }
}