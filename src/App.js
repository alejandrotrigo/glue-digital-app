import React from 'react';

import HomeComponent from './components/homeComponent/HomeComponent';
import ScoreComponent from './components/scoreComponent/ScoreComponent';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import * as serviceWorker from './serviceWorker';




function App() {
  return (

    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/score" component={ScoreComponent} />
      </div>
    </Router>
  );
}

export default App;

/*

<Route path="/loading" component={LoadingComponet} />
<Route path="/result" component={ResultComponent} />
*/
