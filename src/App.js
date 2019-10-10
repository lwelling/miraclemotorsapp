import React, { Component } from 'react';
import logo from './MM-Icon1.png';
import './App.css';
import FormContainer from './Components/FormContainer/FormContainer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs'
import firebase from './firebase.js';

class App extends Component {
    state = {
        newUser: {
          email: { 
            value: '',
            type: 'email',
            prettyName: 'Email' 
          },
          password: { 
            value: '',
            type: 'password',
            prettyName: 'Password' 
          },
        }
      }

      handleChange = (value, key) => {
        this.setState(prevState => ({
          newUser: {
            ...prevState.newUser,
            [key]: {
              ...prevState.newUser[key],
              value,
            }
          }
        }))
      }

      handleLogIn = (e) => {
        e.preventDefault();
        const email = this.state.newUser.email.value;
        const password = this.state.newUser.password.value;
        console.log(email)
        console.log(password)
      }

      handleSignUp = (e) => {
        e.preventDefault();
        const usersRef = firebase.database().ref('users');
        const newUser = {
          email: this.state.newUser.email.value,
          password: this.state.newUser.password.value
        }
        console.log(newUser)
        usersRef.push(newUser);
      }

  render() {
    return (
      <Router>
        <div>
          <nav className='nav-bar'>
            <ul>
            <li style={{ listStyleType: "none" }}>
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </Link>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Link to="/about">About Us</Link>
            </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/signup">
              <FormContainer 
                handleLogIn={this.handleLogIn}
                handleSignUp={this.handleSignUp}
                newUser={this.state.newUser}
                handleChange={this.handleChange}
              />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/">
              <div>
                <h1>
                  HOMEPAGE
                </h1>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>


    )
  }
}

export default App;
