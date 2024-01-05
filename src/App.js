import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FaqContainer from "./container/faq";
import FooterContainer from "./container/footer";
import { JumbotronContainer } from "./container/jumbotron";
import * as ROUTES from "./constants/routes";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/">
					<>
						<JumbotronContainer />,
						<FaqContainer />
						<FooterContainer />
					</>
				</Route>
			</Routes>
		</Router>
	);
}
