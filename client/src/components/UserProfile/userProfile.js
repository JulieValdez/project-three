import React, { Component, Fragment } from 'react';
import axios from 'axios';

class UserProfile extends Component {
	state = {
		user: {}
	};

	componentDidMount() {
		const user = window.localStorage.getItem('userId')
		// console.log(user);
		
		axios
			.get(`/userprofile/${user}`)
			.then((res) => {
				console.log(res);
				this.setState({ user: res.data });
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Fragment>
				<h1>user ID: <strong>{this.state.user.userId}</strong></h1>
				<h2>username : <strong>{this.state.user.userhandle}</strong></h2>
				<h2>bio : <strong>{this.state.user.bio}</strong></h2>
				<h2>website: <strong>{this.state.user.website}</strong></h2>
				<h2>hobbies: <strong>{this.state.user.hobbies}</strong></h2>
			</Fragment>
		);
	}
}

export default UserProfile;
