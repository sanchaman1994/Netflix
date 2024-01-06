import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Home, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";
import { useAuthListener } from "./hooks";

export default function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<Routes>
				<Route
					path={ROUTES.SIGN_IN}
					element={
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
							{() => <Signin />}
						</IsUserRedirect>
					}
				/>
				<Route
					path={ROUTES.SIGN_UP}
					element={
						<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
							{() => <Signup />}
						</IsUserRedirect>
					}
				/>
				<Route
					path={ROUTES.BROWSE}
					element={<ProtectedRoute user={user}>{<Browse />}</ProtectedRoute>}
				/>
				<Route path="/" element={user ? <Browse /> : <Home />} />
			</Routes>
		</Router>
	);
}
