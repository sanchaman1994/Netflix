import React from "react";
import { Accordion, OptForm } from "../components";
import faqData from "../fixures/faq.json";

export default function FaqContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqData.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
			<Accordion.Item />
			<OptForm>
				<OptForm.Text>
					{" "}
					Ready to watch? Enter your mail to create or restart your membership
				</OptForm.Text>
				<OptForm.Input placeholder={"Email address"} />
				<OptForm.Button>Try it now</OptForm.Button>
				<OptForm.Break />
			</OptForm>
		</Accordion>
	);
}
