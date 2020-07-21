import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';


function App() {
  return (
    <Router>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/user">User Page</Link>
      </div>
      <Switch>
        <Route path="/login" component={Login}/>{" "}
        <Route component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
