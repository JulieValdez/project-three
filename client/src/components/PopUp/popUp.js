import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function PopUp(
  props,
  { posttitle, handleInputChange, postbody, selectcategory, onSubmit }
) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h4>Make a Post!</h4>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.onSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Control
              type="text"
              placeholder="Post Title"
              onChange={props.handleInputChange}
            >
              {posttitle}
            </Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="categorySelect">
            <Form.Label>Choose a Category</Form.Label>
            <Form.Control
              as="select"
              onChange={props.handleInputChange}
              value=""
            >
              <option defaultValue="Fitness">Fitness</option>
              <option value="Groceries">Groceries</option>
              <option value="Recipes">Recipes</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Resources">Resources</option>
              <option value="Misc">Misc.</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="textBlock">
            <Form.Control
              as="textarea"
              rows="3"
              onChange={props.handleInputChange}
            >
              {postbody}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={props.onSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// PopUp.propTypes = {
//   drawerClickHandler: PropTypes.func.isRequired,
//   posttitle: PropTypes.string.isRequired,
//   handleInputChange: PropTypes.func.isRequired,
//   postbody: PropTypes.string.isRequired,
//   selectcategory: PropTypes.string.isRequired,
// };

// PropTypes.checkPropTypes();

export default PopUp;
