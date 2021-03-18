import axios from 'axios';
import { LOADING_DATA, GET_EXERCISES, CREATE_EXERCISE, DELETE_EXERCISE } from '../types';
// import 

export const getExercises = () => async(dispatch) => {
  try {
    dispatch({ type: LOADING_DATA })
    const response = await axios.get('http://localhost:3090/exercises');
    // console.log(response.data);
    dispatch({ type: GET_EXERCISES, payload: response.data })
    dispatch({ type: LOADING_DATA })

  } catch (error){
    console.log(error.response);
  }
}

export const getOneExercise = (id) => async(dispatch) => {
  try {
    const response = axios.get('http://localhost:3090/exercises/id');
    console.log(response);
  } catch (error){
    console.log(error.response);
  }
}

export const deleteExercise = (id) => async(dispatch) => {
  try {
    const response = await axios.delete('http://localhost:3090/exercises/delete/'+id);
    console.log(response);
    dispatch({ type: DELETE_EXERCISE, payload: id })
  } catch(error){
    console.log(error.response)
  }
}

export const createExercise = (exercise, callback) => async (dispatch) => {
  console.log(exercise);
  try {
    const response = await axios.post('http://localhost:3090/exercises/add', exercise);
    console.log(response.data);
    dispatch({ type: CREATE_EXERCISE, payload: response.data });
    callback();
  } catch(error){
    console.log(error.response)
  }
}