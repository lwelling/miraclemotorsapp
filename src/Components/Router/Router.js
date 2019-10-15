import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import AddToList from "../AddToList/AddToList";
import PrivateRoute from "../../PrivateRoute";
import Navigation from "../Navigation/Navigation";

const Router = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/addunit" component={AddToList} />
    </Switch>
  </div>
);

export default Router;
