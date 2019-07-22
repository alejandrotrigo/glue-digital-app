import React from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import HomeComponent from './components/homeComponent/HomeComponent';
import ScoreComponent from './components/scoreComponent/ScoreComponent';
import ResultComponent from './components/resultComponent/ResultComponent';


function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/score" component={ScoreComponent} />
        <Route path="/result" component={ResultComponent} />
      </div>
    </Router>
  );
}

export default App;

/*

<Route path="/loading" component={LoadingComponet} />

*/
