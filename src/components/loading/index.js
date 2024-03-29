import React from "react";
import {
	LockBody,
	ReleaseBody,
	Spinner,
	Picture,
} from "./styles/loading.style";

export default function Loading({ src, ...restProps }) {
	return (
		<Spinner {...restProps}>
			<LockBody />
			<Picture src={`/images/users/${src}.png`} />
		</Spinner>
	);
}

Loading.ReleaseBody = function LoadingReleaseBody() {
	return <ReleaseBody />;
};
