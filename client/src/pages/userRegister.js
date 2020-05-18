import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/wrapper';
import TopNav from '../components/TopNav/topNav';
import RegisterationForm from '../components/RegistrationForm/registrationForm';

class userRegister extends Component {
	render() {
		return (
			<div className="App">
				<div className="fullpage">
					<TopNav />
					<RegisterationForm />
				</div>
			</div>
		);
	}
}

export default userRegister;
