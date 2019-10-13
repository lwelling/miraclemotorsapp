import React, { useContext, useCallback } from "react";
import { Redirect, withRouter } from "react-router";
import "./SignUp.css";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
    
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <input required name="email" type="email" placeholder="Email" />
        <br />
        <input required name="password" type="password" placeholder="Password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
