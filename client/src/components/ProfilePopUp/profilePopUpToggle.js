import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


function profilePopUpToggle(props, { userhandle, bio, website, interest }) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<h4>Update your profile</h4>
			</Modal.Header>
			<Modal.Body>
                {/* userhandle */}
				<Form onSubmit={props.onSubmit}>
					<Form.Group controlId="formTitle">
						<Form.Control
							type="text"
							placeholder="Post Title"
							onChange={props.handleinputchange}
							name="userhandle"
						>
							{userhandle}
						</Form.Control>
					</Form.Group>
					<br />
                    <Form.Group controlId="formTitle">
						<Form.Control
							type="text"
							placeholder="Post Title"
							onChange={props.handleinputchange}
							name="bio"
						>
							{bio}
						</Form.Control>
					</Form.Group>
					<br />
                    <Form.Group controlId="formTitle">
						<Form.Control
							type="text"
							placeholder="Post Title"
							onChange={props.handleinputchange}
							name="website"
						>
							{website}
						</Form.Control>
					</Form.Group>
					<br />
                    <Form.Group controlId="formTitle">
						<Form.Control
							type="text"
							placeholder="Post Title"
							onChange={props.handleinputchange}
							name="interest"
						>
							{interest}
						</Form.Control>
					</Form.Group>
					<br />



				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onSubmit} type="submit">
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default profilePopUpToggle;