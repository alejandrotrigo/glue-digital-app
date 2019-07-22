import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import HomeComponent from './components/homeComponent/HomeComponent';
import ScoreComponent from './components/scoreComponent/ScoreComponent';

import * as reducers from './reducers';


const reducer = combineReducers({
  ...reducers,
  main : reducers.MainReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  combineReducers({
    ...reducers,
    main: reducers.MainReducer
  }),
  composeEnhancers(compose(
    applyMiddleware(thunkMiddleware)
  ))
);


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/score" component={ScoreComponent} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;

/*

<Route path="/loading" component={LoadingComponet} />
<Route path="/result" component={ResultComponent} />
*/
