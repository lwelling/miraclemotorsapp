import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../MM-Icon1.png";
import { AuthContext } from "../../Auth";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? (
    <nav className="nav-bar">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to="/addunit">Add Vehicle</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="nav-bar">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to="/login">Log in</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
