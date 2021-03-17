import { combineReducers } from 'redux';
import authReducer from './authReducer';
import exerciseReducer from './exerciseReducer';
import userReducer from './userReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  exercise: exerciseReducer,
  user: userReducer
})