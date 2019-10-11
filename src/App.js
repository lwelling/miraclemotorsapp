import React, { Component } from 'react';
import logo from './MM-Icon1.png';
import './App.css';
import FormContainer from './Components/FormContainer/FormContainer'
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs'
import firebase from './firebase.js';
// import firebaseui from 'firebaseui';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     this.state.newUser.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/' />
//   )} />
// )


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
          isAuthenticated: true,
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
        const newUser = {
          email: this.state.newUser.email.value,
          password: this.state.newUser.password.value
        }
        firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password).catch(function(error) {
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // ...
        });

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log('signed in')
          } else {
            console.log('signed out')
          }
        });
        
      }

      handleSignUp = (e) => {
        e.preventDefault();
        const newUser = {
          email: this.state.newUser.email.value,
          password: this.state.newUser.password.value
        }
        // push to database 
        // const usersRef = firebase.database().ref('users');
        // usersRef.push(newUser)

        // sign up for authorize with firebase
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).catch(function(error) {
          // Handle Errors here.

          // const errorCode = error.code;
          // const errorMessage = error.message;
        })
      }

  render() {
    if(this.state.newUser.isAuthenticated) { 
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
              <Route path="/about" >
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

          <div>
              <h1>{this.state.newUser.isAuthenticated}</h1>
            </div>
        </Router>


      )
    } else {
      return (
        <h1>
          Please Sign In
        </h1>
      )
    }
  }
}

export default App;
