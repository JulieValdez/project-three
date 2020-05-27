import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PopUp(
  props,
  {
    posttitle,
    handleinputchange,
    postbody,
    selectcategory,
    handlemodalopen,
    onSubmit,
  }
) {
  // console.log(props.handleinputchange);

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
              onChange={props.handleinputchange}
              name="posttitle"
            >
              {posttitle}
            </Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="categorySelect">
            <Form.Label>Choose a Category</Form.Label>
            <Form.Control
              as="select"
              onChange={props.handleinputchange}
              value={props.selectcategory}
              name="selectcategory"
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
              onChange={props.handleinputchange}
              name="postbody"
            >
              {postbody}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onSubmit} type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
