import React from "react";
import Button from "react-bootstrap/Button";
import PopUp from "./popUp";

function PopUpToggle() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        style={{ marginLeft: "500px" }}
      >
        Create a Post
      </Button>

      <PopUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default PopUpToggle;
