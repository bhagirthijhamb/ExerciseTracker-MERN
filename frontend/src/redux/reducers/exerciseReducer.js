import { LOADING_DATA, GET_EXERCISES, CREATE_EXERCISE, DELETE_EXERCISE, GET_ONE_EXERCISE, EDIT_EXERCISE } from './../types';

const INITIAL_STATE = {
  loading: false,
  exercises: [],
  exercise: {}
}

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    case LOADING_DATA:
      return { ...state, loading: true }
    case GET_EXERCISES:
      // console.log(action.payload)
      return { ...state, exercises: action.payload, loading: false }
    case GET_ONE_EXERCISE:
      return { ...state, exercise: action.payload }
    case EDIT_EXERCISE:
      return { ...state, exercise: action.payload }
    case CREATE_EXERCISE:
      return { ...state, exercises: [ ...state.exercises, action.payload ] }
    case DELETE_EXERCISE:
      const index = state.exercises.findIndex(exercise => exercise._id === action.payload);
      state.exercises.splice(index, 1);
      return { ...state }
    default:
      return state
  }
}