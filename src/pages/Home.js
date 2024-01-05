import React from "react";
import { JumbotronContainer } from "../container/jumbotron";
import FaqContainer from "../container/faq";
import FooterContainer from "../container/footer";
import { HeaderContainer } from "../container/header";
import { OptForm, Feature } from "../components";

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>
						Unlimited films, TV programmes and more.
					</Feature.Title>
					<Feature.SubTitle>
						Watch anywhere. Cancel at any time.
					</Feature.SubTitle>

					<OptForm>
						<OptForm.Input placeholder="Email address" />
						<OptForm.Button>Try it now</OptForm.Button>
						<OptForm.Break />
						<OptForm.Text>
							Ready to watch? Enter your email to create or restart your
							membership.
						</OptForm.Text>
					</OptForm>
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqContainer />
			<FooterContainer />
		</>
	);
}
