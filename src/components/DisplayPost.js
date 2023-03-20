import React from "react";
import { useState, useEffect } from "react";

function DisplayPosts() {
	const [posts, SetPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				SetPosts(data);
			});
	}, []);
	return (
		<div className="posts-container">
			{posts.map((post) => {
				return (
					<div
						className="post-card"
						key={post.id}
					>
						<h2 className="post-title">{post.title}</h2>
						<p className="post-body">{post.body}</p>
						<div>
							<button>Delete</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default DisplayPosts;
