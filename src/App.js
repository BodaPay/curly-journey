import "./App.css";
import AddPosts from "./components/AddPosts";
import DisplayPosts from "./components/DisplayPosts";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Up and runnning</h1>
			</header>
			<AddPosts />
			<DisplayPosts />
		</div>
	);
}

export default App;
