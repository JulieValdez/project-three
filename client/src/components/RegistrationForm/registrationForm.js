import React from 'react';
import './style.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import registerGraphic from '../assets/registerGraphic.svg';

function RegisterationForm(props) {
	return (
		<div className="container-fluid">
			<div className="register">
				<div class="col-sm-4">
					<img className="register-graphic" src={registerGraphic} />
					<Form>
                    <Form.Group controlId="formBasicEmail">
							<Form.Label>Full Name</Form.Label>
							<Form.Control type="" placeholder="Enter name" />
						</Form.Group>
                        <Form.Group controlId="formBasicEmail">
							<Form.Label>Birthday</Form.Label>
							<Form.Control type="" placeholder="Enter birithday" />
						</Form.Group>
                        <Form.Group controlId="formBasicEmail">
							<Form.Label>Zip Code</Form.Label>
							<Form.Control type="" placeholder="Enter zip code" />
			
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

                        <Form.Group controlId="formBasicPassword">
							<Form.Label>Verify Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button id="register-button" variant="info" type="submit" href="#">
							Register
						</Button>

						<br />
						<span id="no-account">Already have an account?</span>
						<br />
						<Button id="sign-in-button" variant="outline-info" type="submit" href="/">
							Sign In
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default RegisterationForm;
