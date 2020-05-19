import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";
import PopUp from "../components/PopUp/popUp";
import Button from "react-bootstrap/Button";

class userHome extends Component {
  ModalShowHide = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <PopUp show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  };
  render() {
    return (
      <div className="App">
        <Wrapper />
        <ResponsiveNav />
        <PopUp />
      </div>
    );
  }
}

export default userHome;
