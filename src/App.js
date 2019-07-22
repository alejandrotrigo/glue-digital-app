import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import HomeComponent from './components/homeComponent/HomeComponent';
import ScoreComponent from './components/scoreComponent/ScoreComponent';

import scrumPokerScore from './reducers/ScrumPokerScore';

let store = createStore(scrumPokerScore);


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
