import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import request from "superagent";

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
  function onPhotoSelected(files) {
    const cloudName = "df4dz8nol";
    const uploadPreset = "vy3yda4c";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const title = "post photo";
    for (let file of files) {
      request
        .post(url)
        .field("upload_preset", uploadPreset)
        .field("file", file)
        .field("multiple", true)
        .field("tags", title ? `myphotoalbum,${title}` : "myphotoalbum")
        .field("context", title ? `photo=${title}` : "")
        .end((error, response) => {
          console.log("response", response);
          props.handleImageChange("test");
        });
    }
  }

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
          <Form.Group controlId="textBlock">
            <Form.Control
              as="file"
              rows="3"
              onChange={props.handleImageChange}
              name="postimage"
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
