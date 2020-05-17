import React from 'react';
import './style.css';

function PostCard(props) {
	return (
		<div>
			{/* pulling articles pseudocode
			<div className="container">
				{this.state.posts.map((blogPost) => (
					<div
						onClick={this.handleImageClick}
						key={blogPost.id}
						id={blogPost.id}
						className="click-item"
						role="img"
						aria-label="click item"
						style={{ backgroundImage: `url("${blogPost.image}")` }}
					/>
                    <img src={blogPost.image}></img>
				))}
			</div> */}

			<div
				// key={blogPost.id}
				// id={blogPost.id}
				className="post"
				role="view post"
				aria-label="click item"
				style={{}}
			/>
			{/* <img src={blogPost.image} /> */}
		</div>
	);
}

export default PostCard;
