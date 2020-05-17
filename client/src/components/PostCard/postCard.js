import React from 'react';
import './style.css';

function PostCard(props) {
	return (
		<div className="container">
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
			<div class="row">
				<div
					// key={blogPost.id}
					// id={blogPost.id}
					className="post-card"
					role="view post"
					aria-label="click item"
					style={{}}
				>
					<div className="info">
						<span className="title">
							<h1>POST TITLE</h1>
							<img
								className="post-img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
							/>
						</span>
						
						{/* <div>
						<br></br>
						<span className="post-content">place holder post content</span>	
						</div> */}
					</div>
				</div>

				<div
					// key={blogPost.id}
					// id={blogPost.id}
					className="post-card"
					role="view post"
					aria-label="click item"
					style={{}}
				>
					<div className="info">
						<span className="title">
							<h1>POST TITLE</h1>
							<img
								className="post-img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
							/>
						</span>
						
						{/* <div>
						<br></br>
						<span className="post-content">place holder post content</span>	
						</div> */}
					</div>
				</div>

				<div
					// key={blogPost.id}
					// id={blogPost.id}
					className="post-card"
					role="view post"
					aria-label="click item"
					style={{}}
				>
					<div className="info">
						<span className="title">
							<h1>POST TITLE</h1>
							<img
								className="post-img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
							/>
						</span>
						
						{/* <div>
						<br></br>
						<span className="post-content">place holder post content</span>	
						</div> */}
					</div>
				</div>

				<div
					// key={blogPost.id}
					// id={blogPost.id}
					className="post-card"
					role="view post"
					aria-label="click item"
					style={{}}
				>
					<div className="info">
						<span className="title">
							<h1>POST TITLE</h1>
							<img
								className="post-img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
							/>
						</span>
						
						{/* <div>
						<br></br>
						<span className="post-content">place holder post content</span>	
						</div> */}
					</div>
				</div>

				<div
					// key={blogPost.id}
					// id={blogPost.id}
					className="post-card"
					role="view post"
					aria-label="click item"
					style={{}}
				>
					<div className="info">
						<span className="title">
							<h1>POST TITLE</h1>
							<img
								className="post-img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
							/>
						</span>
						
						{/* <div>
						<br></br>
						<span className="post-content">place holder post content</span>	
						</div> */}
					</div>
				</div>

				<div
					// key={blogPost.id}
					// id={blogPost.id}
					className="post-card"
					role="view post"
					aria-label="click item"
					style={{}}
				>
					<div className="info">
						<span className="title">
							<h1>POST TITLE</h1>
							<img
								className="post-img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
							/>
						</span>
						
						{/* <div>
						<br></br>
						<span className="post-content">place holder post content</span>	
						</div> */}
					</div>
				</div>

			</div>
		</div>
	);
}

export default PostCard;
