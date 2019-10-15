import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import AddToList from "../AddToList/AddToList";
import PrivateRoute from "../../PrivateRoute";
import Navigation from "../Navigation/Navigation";
import UserHome from '../UserHome/UserHome';

const Router = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/addtowishlist" component={AddToList} />
      <Route exact path="/userhome" component={UserHome} />
    </Switch>
  </div>
);

export default Router;
