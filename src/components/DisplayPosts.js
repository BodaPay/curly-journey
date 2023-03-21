import React from "react";
import { useState, useEffect } from "react";
import "./Styles.css";

function DisplayPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
			})
			.catch((error) => console.error(error));
	}, []);

	const handleDelete = (postId) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (res.status === 200) {
					setPosts((posts) => posts.filter((post) => post.id !== postId));
				} else {
					throw new Error("Failed to delete post");
				}
			})
			.catch((error) => console.error(error));
	};

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
						<div className="button">
							<button
								className="delete-button"
								onClick={() => handleDelete(post.id)}
							>
								Delete Post
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default DisplayPosts;
