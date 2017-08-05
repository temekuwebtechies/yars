import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { 
  Container, 
  Row, 
  Col, 
  Jumbotron, 
  Button, 
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink
} from 'reactstrap';

import Account from './components/Account.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Recover from './components/Recover.js';
import SignUp from './components/SignUp.js';

const Navigation = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/signup">Sign Up</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/recover">Recover</Link></li>
    <li><Link to="/account">My Account</Link></li>
  </ul>
)

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: false,
      name: "Anonymous",
      message: {
        type: "hidden",
        text: ""
      }
    }
    
    this.showMessage = this.showMessage.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  
  showMessage (type = "hidden", text = "") {
    this.setState({message: {type, text}});
  }
  
  apiCall() {
    console.info("Calling API");
    return new Promise((resolve, reject) => {
      console.info("Got API Result");
      setTimeout(resolve, Math.random() * 3000);
    });
  }
  
  // Login to auth service
  login (email, password) {
    let { isLoggedIn, name } = this.state;
    
    this.apiCall().then(() => {
      if (Math.random(0) > 0.5) {
        isLoggedIn = true;
        name = "Authenticated";
        this.showMessage('success', 'Login successful');
      } else {
        isLoggedIn = false;
        name = "Stranger";
        this.showMessage('error', 'Login failed!');
      }
      this.setState({isLoggedIn, name});
    });
  }
  
  register (email, password) {
    // API Calls
  }
  
  render() {
    const { name, message } = this.state;
    const messageStyles = {
      color: message.type === 'error' ? 'red' : 'green'
    }
    
    return (
      <main>
      <Container>
        <Router>
        <div>
          <Navigation />
          <h1>Welcome {name}</h1>
          <p onClick={() => this.showMessage()} hidden={message.type === "hidden"} style={messageStyles}>{message.text}</p>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login">
              <Login login={this.login} />
            </Route>
            <Route exact path="/recover" component={Recover} />
            <Route exact path="/account" component={Account} />
          </Switch>
        </div>
        </Router>
      </Container>
      </main>
    );
  }
}

export default App;
