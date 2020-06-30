import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CategorySelect from "../CategorySelect/categorySelect";
import request from "superagent";

function PopUp(props, { posttitle, postbody }) {
  const [fileEl, setFileEl] = useState();
  function onPhotoSelected(files) {
    const cloudName = "dyqpxrjky";
    const uploadPreset = "p8cjqach";
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
          props.handleImageChange(response.body.secure_url);
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

          <input
            type="file"
            ref={(fileInputEl) => setFileEl(fileInputEl)}
            onChange={() => onPhotoSelected(fileEl.files)}
          />
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
