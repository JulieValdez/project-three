import React from "react";
import Button from "react-bootstrap/Button";
import PopUp from "./popUp";

function PopUpToggle({
  posttitle,
  handleinputchange,
  postbody,
  selectcategory,
  currentselectedcategory,
}) {
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
        posttitle={posttitle}
        handleinputchange={handleinputchange}
        postbody={postbody}
        selectcategory={handleinputchange}
        currentselectedcategory={currentselectedcategory}
      />
    </>
  );
}

export default PopUpToggle;
