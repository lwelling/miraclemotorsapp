import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const AddToList2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add To WishList
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add To WishList</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" placeholder="Enter year" />
            </Form.Group>
            <Form.Group controlId="make">
              <Form.Label>Make</Form.Label>
              <Form.Control type="string" placeholder="Enter make" />
            </Form.Group>
            <Form.Group controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control type="string" placeholder="Enter model" />
            </Form.Group>
            <Form.Group controlId="miles">
              <Form.Label>Miles</Form.Label>
              <Form.Control type="number" placeholder="Enter miles" />
            </Form.Group>
            <Form.Group controlId="vin">
              <Form.Label>vin</Form.Label>
              <Form.Control type="string" placeholder="Enter VIN" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            onClick={handleClose}
            variant="secondary"
            size="sm"
          >
            Add To WishList
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withRouter(AddToList2);
