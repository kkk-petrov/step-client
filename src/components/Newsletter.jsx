import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useState } from "react";

const NewsletterContainer = styled.div`
	height: 60vh;
	background-color: #f8f8f8;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.h2`
	font-size: 70px;
	margin-bottom: 20px;
`;
const Desc = styled.p`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 40px;

	${mobile({
		textAlign: "center",
	})}
`;
const InputNewsletterContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: #f8f8f8;
	display: flex;
	justify-content: space-between;
	border: 1px solid #000;

	&::placeholder {
		color: #000;
	}

	${mobile({
		width: "80%",
	})}
`;
const Input = styled.input`
	flex: 8;
	padding-left: 20px;
	border: none;
	border-right: none;
	background-color: #f8f8f8;

	&:focus-visible {
		outline: none;
	}
`;
const Button = styled.button`
	flex: 1;
	background: #000;
	color: #fff;
	cursor: pointer;
	transition: all 0.3s ease;
	border: none;
	border-left: 1px solid #000;
`;

const Newsletter = () => {
	const handleAlert = () => {
		console.log("Alert");
		alert("OK");
	};
	return (
		<NewsletterContainer>
			{/* <Title>Newsletter</Title> */}
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputNewsletterContainer>
				<Input placeholder="Your email" />
				<Button onClick={handleAlert}>
					<Send />
				</Button>
			</InputNewsletterContainer>
		</NewsletterContainer>
	);
};

export default Newsletter;
