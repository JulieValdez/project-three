import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
	state = {
		user: []
	};

	componentDidMount() {
		axios
			.get('/userprofile')
			.then((res) => {
				console.log(res.data.userId);
				this.setState({ user: res.data });
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<h1>{this.state.user.userId}</h1>
		);
	}
}

export default UserProfile;
