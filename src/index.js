import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<GlobalStyles />
		<App />
	</>
);
