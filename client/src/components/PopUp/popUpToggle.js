import React from "react";
import Button from "react-bootstrap/Button";
import PopUp from "./popUp";

function PopUpToggle({
  posttitle,
  handleInputChange,
  postbody,
  selectcategory,
  handleSelectCatChange,
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
        handleInputChange={handleInputChange}
        postbody={postbody}
        selectcategory={handleSelectCatChange}
      />
    </>
  );
}

export default PopUpToggle;
