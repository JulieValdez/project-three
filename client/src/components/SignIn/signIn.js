import React from 'react';
import './style.css';
import signinGraphic from '../assets/signinGraphic.svg';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function SignIn(props) {
	return (
		<div className="sign-in">
			<img className="sign-in-graphic" src={signinGraphic} />
			<div class="sign-in-form">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button className="sign-in-button" variant="outline-info" type="submit">
						Sign In
					</Button>
                
                    <br></br>
                    <span id="no-account">Don't have an account?</span>
                    <br></br>
                    <Button className="register-button" variant="info" type="submit" href="/register">
						Register
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default SignIn;
