import React from "react";
import Button from "react-bootstrap/Button";
import PopUp from "./popUp";

function PopUpToggle({ postTitle, handleInputChange, postBody }) {
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

      <PopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
        postTitle={postTitle}
        handleInputChange={handleInputChange}
        postBody={postBody}
      />
    </>
  );
}

export default PopUpToggle;
