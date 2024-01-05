import React, { useContext, useState } from "react";
import { FirebaseContext } from "../contex/firebase";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "../container/header";
import FooterContainer from "../container/footer";
import * as ROUTES from "../constants/routes";
import { Form } from "../components";

export default function Signin() {
	const history = useNavigate();
	const { firebase } = useContext(FirebaseContext);

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid = password === "" || emailAddress === "";

	const handleSignIn = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress("");
				setPassword("");
				setError(error.message);
			});
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignIn} method="POST">
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix? <Form.Link to="/signup">Sign Up now</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by good don't spam it
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
