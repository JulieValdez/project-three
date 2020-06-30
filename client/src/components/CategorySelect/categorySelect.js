import React from "react";
import Form from "react-bootstrap/Form";

function CategorySelect(props) {
  return (
    <Form.Group controlId="categorySelect">
      <Form.Label>Choose a Category</Form.Label>
      <Form.Control
        as="select"
        onChange={props.handleinputchange}
        value={props.selectcategory}
        name="selectcategory"
      >
        <option value="Fitness">Fitness</option>
        <option value="Groceries">Groceries</option>
        <option value="Recipes">Recipes</option>
        <option value="Mental Health">Mental Health</option>
        <option value="Resources">Resources</option>
        <option value="Misc">Misc.</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CategorySelect;
