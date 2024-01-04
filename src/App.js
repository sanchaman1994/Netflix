import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<p> netflix page update</p>} />
					<Route path=":id" element={<p> post page</p>} />
				</Routes>
			</div>
		</Router>
	);
}
