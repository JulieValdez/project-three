import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PopUp(
  props,
<<<<<<< HEAD
  { posttitle, handleInputChange, postbody, selectcategory, onSubmit }
=======
  { posttitle, handleinputchange, postbody, selectcategory, handlemodalopen }
>>>>>>> b5cbefe1436b4e81812df40fc9df6fd227bfd0a2
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
<<<<<<< HEAD
              onChange={props.handleInputChange}
=======
              onChange={props.handleinputchange}
              name="posttitle"
>>>>>>> b5cbefe1436b4e81812df40fc9df6fd227bfd0a2
            >
              {posttitle}
            </Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="categorySelect">
            <Form.Label>Choose a Category</Form.Label>
            <Form.Control
              as="select"
<<<<<<< HEAD
              onChange={props.handleInputChange}
              value=""
=======
              onChange={props.handleinputchange}
              value={props.selectcategory}
              name="selectcategory"
>>>>>>> b5cbefe1436b4e81812df40fc9df6fd227bfd0a2
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
<<<<<<< HEAD
              onChange={props.handleInputChange}
=======
              onChange={props.handleinputchange}
              name="postbody"
>>>>>>> b5cbefe1436b4e81812df40fc9df6fd227bfd0a2
            >
              {postbody}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
<<<<<<< HEAD
        <Button type="submit" onClick={props.onSubmit}>
=======
        <Button onClick={props.handlemodalopen} type="submit">
>>>>>>> b5cbefe1436b4e81812df40fc9df6fd227bfd0a2
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

<<<<<<< HEAD
// PopUp.propTypes = {
//   drawerClickHandler: PropTypes.func.isRequired,
//   posttitle: PropTypes.string.isRequired,
//   handleInputChange: PropTypes.func.isRequired,
//   postbody: PropTypes.string.isRequired,
//   selectcategory: PropTypes.string.isRequired,
// };

// PropTypes.checkPropTypes();

=======
>>>>>>> b5cbefe1436b4e81812df40fc9df6fd227bfd0a2
export default PopUp;
