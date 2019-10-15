import React, { useState, useContext, useCallback } from "react";
import { Redirect, withRouter } from "react-router";
import "./SignUp.css";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";
import { Form, Modal, Button } from "react-bootstrap";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Sign up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form onSubmit={handleSignUp}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    required
                    label="I am a licensed auto dealer"
                    feedback="Must be a licensed dealer to proceed."
                  />
                </Form.Group>
                <Button size="sm" variant="primary" type="submit">
                  Sign up
                </Button>
              </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(handleSignUp, handleClose)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withRouter(SignUp);
