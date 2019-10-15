import React, { useContext } from "react";
import logo from "../../MM-Icon1.png";
import { AuthContext } from "../../Auth";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../../firebase";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AboutUs from '../AboutUs/AboutUs';

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return !!currentUser ? (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button
            href="/"
            variant="primary"
          >
            Home
          </Button>
          <Button
            href="/userhome"
            variant="dark"
          >
            Profile
          </Button>
          <Button
            onClick={() => firebase.auth().signOut()}
            href="/"
            variant="secondary"
          >
            Log out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Login />
          <SignUp />
          <AboutUs />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
