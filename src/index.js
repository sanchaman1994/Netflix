import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./contex/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<FirebaseContext.Provider value={{ firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>
);
