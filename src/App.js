import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Auth";
import PrivateRoute from "./PrivateRoute";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddToList from './Components/AddToList/AddToList';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/about" component={AboutUs} />
            <PrivateRoute exact path="/addunit" component={AddToList} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
