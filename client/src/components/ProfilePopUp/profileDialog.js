import React, { Component, Fragment } from "react";

//Material UI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 20,
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%",
  },
  startButton: {
    position: "relative",
    margin: "0 auto",
    display: "block",
    marginBottom: 20,
  },
};

const ProfileDialog = ({
  classes,
  handleOpen,
  handleClose,
  handleSubmit,
  open,
  user,
  changeUserState,
  onPhotoSelected,
  APIrequest,
}) => {
  let fileInput;

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        tip="Update your profile!"
        className={classes.startButton}
      >
        {" "}
        Update Your Profile
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <Button
          tip="Close"
          onClick={handleClose}
          className={classes.closeButton}
        >
          <CloseIcon />
        </Button>
        <DialogTitle>Update Your Profile</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="userhandle"
              value={user.userhandle}
              type="text"
              label="userhandle"
              multiline
              rows="3"
              placeholder="What is your username?"
              className="textField"
              onChange={changeUserState}
              fullWidth
            />
            <TextField
              name="bio"
              type="text"
              label="bio"
              multiline
              rows="3"
              placeholder="Share your bio"
              className="textField"
              onChange={changeUserState}
              fullWidth
            />
            <TextField
              name="website"
              type="text"
              label="website"
              multiline
              rows="3"
              placeholder="http://website.com"
              className="textField"
              onChange={changeUserState}
              fullWidth
            />
            <TextField
              name="hobbies"
              type="text"
              label="hobbies"
              multiline
              rows="3"
              placeholder="What are your interests?"
              className="textField"
              onChange={changeUserState}
              fullWidth
            />
            <input
              type="file"
              ref={(fileInputEl) => {
                fileInput = fileInputEl;
              }}
              onChange={() => {
                return onPhotoSelected(fileInput.files);
              }}
            />

            <Button
              variant="contained"
              color="primary"
              disabled={APIrequest}
              onClick={handleSubmit}
              className={classes.submitButton}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default withStyles(styles)(ProfileDialog);
