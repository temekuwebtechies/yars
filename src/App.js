import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Account from './components/Account.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Recover from './components/Recover.js';
import SignUp from './components/SignUp.js';

const Nav = () => (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/recover">Recover</Link></li>
      <li><Link to="/account">My Account</Link></li>
    </ul>
)

class App extends Component {
  
  initRoutes() {
    return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/recover" component={Recover} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </div>
    </Router>
    )
  }
  
  render() {
    return (
      <main>
        {this.initRoutes()}
      </main>
    );
  }
}

export default App;
