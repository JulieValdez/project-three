import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PopUp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Control type="text" placeholder="Post Title" />
          </Form.Group>
          <br />
          <Form.Group controlId="categorySelect">
            <Form.Label>Choose a Category</Form.Label>
            <Form.Control as="select">
              <option>Fitness</option>
              <option>Groceries</option>
              <option>Recipes</option>
              <option>Mental Health</option>
              <option>Resources</option>
              <option>Misc.</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="textBlock">
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
