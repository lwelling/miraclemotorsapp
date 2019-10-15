import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Auth";
import "./App.css";
import Router from "./Components/Router/Router";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
