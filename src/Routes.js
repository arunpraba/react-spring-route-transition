import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink className="one-link" to="/">One</NavLink>
        <NavLink className="two-link" to="/two">Two</NavLink>
        <NavLink className="three-link" to="/three">Three</NavLink>
      </ul>

      <div>
        <Switch>
          <Route exact path="/" component={One} />
          <Route exact path="/two" component={Two} />
          <Route exact path="/three" component={Three} />
        </Switch>
      </div>
    </Router>
  );
}

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}

function One() {
  return (
    <div className="page-route one">
      <h1>One</h1>
    </div>
  );
}

function Two() {
  return (
    <div className="page-route two">
      <h1>Two</h1>
    </div>
  );
}

function Three() {
  return (
    <div className="page-route three">
      <h1>Three</h1>
    </div>
  );
}
