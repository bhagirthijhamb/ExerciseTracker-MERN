import axios from 'axios';
import { LOADING_DATA, GET_EXERCISES } from '../types';
// import 

export const getExercises = () => async(dispatch) => {
  try {
    dispatch({ type: LOADING_DATA })
    const response = await axios.get('http://localhost:3090/exercises');
    // console.log(response.data);
    dispatch({ type: GET_EXERCISES, payload: response.data })
    dispatch({ type: LOADING_DATA })

  } catch (error){
    console.log(error.response.data);
  }
}