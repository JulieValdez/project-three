import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CategorySelect from "../CategorySelect/categorySelect";

function PopUp(props, { posttitle, postbody }) {
  console.log(props);

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
          <CategorySelect
            selectcategory={props.selectcategory}
            handleinputchange={props.handleinputchange}
          />

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
