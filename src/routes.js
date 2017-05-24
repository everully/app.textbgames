import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

const NoMatch = ({location}) => (
    <div>
        <h3>No match for
            <code>{location.pathname}</code>
        </h3>
    </div>
)

export default(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch}/>
      </Switch>
    </App>
  </Router>
);
