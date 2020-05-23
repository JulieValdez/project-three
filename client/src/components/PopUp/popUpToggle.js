import React from "react";
import Button from "react-bootstrap/Button";
import PopUp from "./popUp";
import PropTypes from "prop-types";

function PopUpToggle({
  posttitle,
  handleInputChange,
  postbody,
  selectcategory,
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
        selectcategory={selectcategory}
      />
    </>
  );
}

PopUpToggle.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
  posttitle: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  postbody: PropTypes.string.isRequired,
  selectcategory: PropTypes.string.isRequired,
  handleSelectCatChange: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes();

export default PopUpToggle;
