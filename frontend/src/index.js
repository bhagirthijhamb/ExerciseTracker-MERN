import react from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import ExerciseList from './components/ExerciseList';
import reducers from './redux/reducers';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
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
      </App>
    </BrowserRouter>
  </Provider>, document.querySelector('#root'));