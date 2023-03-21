import React from "react";
import { useState } from "react";
import "./Styles.css";

function AddPosts() {
	const [posts, setPosts] = useState([]);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify({
				title: title,
				body: body,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((post) => {
				setPosts((posts) => [post, ...posts]);
				setTitle("");
				setBody("");
			})
			.catch((error) => console.error(error));
	};
	return (
		<div className="form-container">
			<form
				onSubmit={handleSubmit}
				className="form"
			>
				<input
					type="text"
					placeholder="Enter post title..."
					onChange={(e) => setTitle(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Enter post body..."
					onChange={(e) => setBody(e.target.value)}
				/>
				<div>
					<button
						type="submit"
						className="add-button"
					>
						Add Post
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddPosts;
