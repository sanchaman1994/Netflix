import React from "react";
import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }) {
	if (user) {
		// If the user is logged in, redirect to the specified path
		return <Navigate to={loggedInPath} replace />;
	}

	// If the user is not logged in, render the provided child component
	return children();
}

export function ProtectedRoute({ user, children, ...rest }) {
	return user ? children : <Navigate to="/signin" replace />;
}
