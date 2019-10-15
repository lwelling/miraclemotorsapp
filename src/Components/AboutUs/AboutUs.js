import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        About Us
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We are a small company packing a big punch!
          <br /> With over 200 units turning each month, we know the importance
          of delivering inventory that sells quickly.
          <br /> If you are a dealer, check out our diverse inventory and find
          your next deal.
          <br />
          <strong>Remember- if it's a good one, it's a Miracle!</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AboutUs;
