import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Home, Signin, Signup } from "./pages";
import { IsUserRedirect } from "./helper/routes";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path={ROUTES.HOME} element={<Home />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/signin" element={<Signin />} />
				<Route exact path="/browse" element={<Browse />} />
			</Routes>
		</Router>
	);
}
