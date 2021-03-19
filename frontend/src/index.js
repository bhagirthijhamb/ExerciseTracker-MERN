import react from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import ExerciseList from './components/Exercises/ExerciseList';
import CreateExercise from './components/Exercises/CreateExercise';
import EditExercise from './components/Exercises/EditExercise';
import reducers from './redux/reducers';

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  // <Provider store={createStore(reducers, {})}>
  <Provider store={store}>
    <BrowserRouter>
      {/* <App /> */}
      <App>
        {/* <Welcome /> */}
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path='/exercises' component={ExerciseList} />
        <Route path='/createExercise' component={CreateExercise} />
        <Route path='/editExercise/:id' component={EditExercise} />
      </App>
    </BrowserRouter>
  </Provider>, document.querySelector('#root'));

  // HO component is a noraml React component that is specifically made to help us reuse code inside our application
  // COmponent (React Component) + HO Component (React Component) = Component (Additional functionality or data)('Enhanced' or 'Composed' Component) 