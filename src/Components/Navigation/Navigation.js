import React, { useContext } from "react";
import logo from "../../MM-Icon1.png";
import { AuthContext } from "../../Auth";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../../firebase";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AboutUs from '../AboutUs/AboutUs'

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return !!currentUser ? (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addunit">Add Unit</Nav.Link>
          <Button
            onClick={() => firebase.auth().signOut()}
            href="/"
            variant="dark"
          >
            Log out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar sticky="bottom" bg="light" expand="lg">
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
