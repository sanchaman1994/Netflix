import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: ${({ src }) =>
		src
			? `url(../images/misc/${src}.jpg) top left / cover no-repeat`
			: `url(../images/misc/home-bg.jpg) top left / cover no-repeat`};

	@media (max-width: 1100px) {
		${({ dontShowOnSmallViewPort }) =>
			dontShowOnSmallViewPort && `background:none;`}
	}
`;
export const Logo = styled.img`
	height: 32px;
	width: 108px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const Frame = styled.div``;
export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	/* height: 64px; */
	height: 100%;
	padding: 18px 0;
	justify-content: space-between;
	/* align-items: center; */

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;
export const ButtonLink = styled(ReachRouterLink)`
	display: block;
	background-color: #e50914;
	width: 84px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background: #f40612;
	}
`;

export const Feature = styled(Container)`
	padding: 150px 0 150px 0;
	flex-direction: column;
	width: 50%;

	@media (max-width: 1100px) {
		display: none;
	}
`;

export const Text = styled.p`
	color: white;
	font-size: 22px;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const FeatureCallOut = styled.h2`
	color: white;
	font-size: 50px;
	line-height: normal;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
`;

export const Link = styled.p`
	color: #fff;
	text-decoration: none;
	margin-right: 30px;
	font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
	cursor: pointer;

	&:hover {
		font-weight: bold;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const Picture = styled.button`
	background: url(${({ src }) => src});
	background-size: cover;
	background-repeat: no-repeat;
	border: 0;
	width: 32px;
	height: 32px;
	cursor: pointer;
`;

export const Dropdown = styled.div`
	display: none;
	position: absolute;
	background-color: black;
	padding: 10px;
	width: 150px;
	top: 32px;
	right: 10px;

	${Group}:last-of-type ${Link} {
		cursor: pointer;
		margin-left: 60px;
	}

	${Group} {
		margin-bottom: 10px;

		&:last-of-type {
			margin-bottom: 0;
		}

		${Link} {
			cursor: pointer;
		}

		${Picture} {
			cursor: default;
		}
	}

	button {
		margin-right: 10px;
	}

	p {
		font-size: 12px;
		margin-bottom: 0;
		margin-top: 0;
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;

	button {
		cursor: pointer;
	}

	&:hover > ${Dropdown} {
		display: flex;
		flex-direction: column;
	}
`;

export const Search = styled.div`
	display: flex;
	align-items: center;

	svg {
		color: white;
		cursor: pointer;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

export const SearchIcon = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: 0;
	outline: 0;
	height: 32px;
	width: 32px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		filter: brightness(0) invert(1);
		width: 16px;
	}
`;
export const SearchInput = styled.input`
	background-color: rgba(64, 64, 64, 0.5);
	color: white;
	border: 1px solid white;
	transition: width 0.5s;
	height: 30px;
	font-size: 14px;
	border-radius: 4px;
	margin-left: ${({ active }) => (active === true ? "10px" : "0")};
	padding: ${({ active }) => (active === true ? "0 10px" : "0")};
	opacity: ${({ active }) => (active === true ? "1" : "0")};
	width: ${({ active }) => (active === true ? "200px" : "0px")};

	&:focus {
		background-color: rgba(0, 0, 0, 0.8);
	}
`;
