import React from "react";
import Button from "react-bootstrap/Button";
import PopUp from "./popUp";

function PopUpToggle({
  posttitle,
  handleinputchange,
  postbody,
  selectcategory,
  onSubmit,
  handlemodalopen,
  modalopenstatus,
  handlemodalclose,
}) {
  return (
    <>
      <Button
        variant="primary"
        onClick={handlemodalopen}
        style={{ marginLeft: "500px" }}
      >
        Create a Post
      </Button>

      <PopUp
        show={modalopenstatus}
        onHide={handlemodalclose}
        posttitle={posttitle}
        handleinputchange={handleinputchange}
        postbody={postbody}
        onSubmit={onSubmit}
        selectcategory={selectcategory}
        handlemodalopen={handlemodalopen}
      />
    </>
  );
}

export default PopUpToggle;
