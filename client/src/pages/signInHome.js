import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/wrapper';
import TopNav from '../components/TopNav/topNav';
import PostCard from '../components/PostCard/postCard';

class signInHome extends Component {
	render() {
		return (
			<div className="home">
				<Wrapper>
					<TopNav />
					<PostCard />
					<PostCard />
					<PostCard />
				</Wrapper>
			</div>
		);
	}
}

export default signInHome;
