import React, { useState, Component } from "react";
import firebase from "../../firebase";
import { Form, Button, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class AddToList extends Component {
  state = {
    newUnit: {
      show: {
        value: false
      },
      miles: {
        prettyName: "Miles",
        value: "",
        type: "number"
      },
      year: {
        prettyName: "Year",
        value: "",
        type: "number"
      },
      make: {
        prettyName: "Make",
        value: "",
        type: "string"
      },
      model: {
        prettyName: "Model",
        value: "",
        type: "string"
      },
      vin: {
        prettyName: "VIN",
        value: "",
        type: "string"
      },
    }
  };

  handleSave = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("inventory")
      .doc(this.state.newUnit.vin.value)
      .set({
        year: this.state.newUnit.year.value,
        make: this.state.newUnit.make.value,
        model: this.state.newUnit.model.value,
        miles: this.state.newUnit.miles
      })
      .then(function() {
        alert("Successfully Added To WishList!");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  handleChange = (value, key) => {
    this.setState(prevState => ({
      newUnit: {
        ...prevState.newUnit,
        [key]: {
          ...prevState.newUnit[key],
          value
        }
      }
    }));
  };

  render() {
    return (
      <>
        <Button
          variant="dark"
          onClick={this.handleChange(true, 'show')}
        >
          Add To WishList
        </Button>

        <Modal show={this.state.newUnit.show.value} onHide={this.handleChange(false, 'show')}>
          <Modal.Header closeButton>
            <Modal.Title>Add To WishList</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSave}>
              <Form.Group controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  onChange={e => this.handleChange(e.target.value, "year")}
                  type={this.state.newUnit.year.type}
                  placeholder="Enter year"
                />
              </Form.Group>
              <Form.Group controlId="make">
                <Form.Label>Make</Form.Label>
                <Form.Control
                  onChange={e => this.handleChange(e.target.value, "make")}
                  type={this.state.newUnit.make.type}
                  placeholder="Enter make"
                />
              </Form.Group>
              <Form.Group controlId="model">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  onChange={e => this.handleChange(e.target.value, "model")}
                  type={this.state.newUnit.model.type}
                  placeholder="Enter model"
                />
              </Form.Group>
              <Form.Group controlId="miles">
                <Form.Label>Miles</Form.Label>
                <Form.Control
                  onChange={e => this.handleChange(e.target.value, "miles")}
                  type={this.state.newUnit.miles.type}
                  placeholder="Enter miles"
                />
              </Form.Group>
              <Form.Group controlId="vin">
                <Form.Label>vin</Form.Label>
                <Form.Control
                  onChange={e => this.handleChange(e.target.value, "vin")}
                  type="vin"
                  placeholder="Enter VIN"
                />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Add to WishList
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              size="sm"
              onClick={
                (this.handleSave, this.handleChange(false, 'show'))
              }
            >
              Add To WishList
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(AddToList);
