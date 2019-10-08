import React, { Component } from 'react';
import logo from './MM-Icon1.png';
import './App.css';
import FormContainer from './Components/FormContainer/FormContainer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs'

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
        console.log('Sign Up!')
      }

      handleSignUp = (e) => {
        e.preventDefault();
        console.log('Sign Up!')
      }

  render() {
    return (
      <Router>
        <div>
          <nav className='nav-bar'>
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
            <ul>
            <li style={{ listStyleType: "none" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link to="/signup">Signup</Link>
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
              <div style={{ textAlign: "center", fontSize: "10vmin" }}>
                HOMEPAGE!
              </div>
            </Route>
          </Switch>
        </div>
      </Router>


    )
  }
}

export default App;
