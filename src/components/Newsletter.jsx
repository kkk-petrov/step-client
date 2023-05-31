import styled, { keyframes } from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useState } from "react";

const AlertAnimation = keyframes`
	0%{
		opacity: 1;
	}
	80%{
		opacity:0;
	}
	100%{
		display:none;
	}
`;

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
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
	margin-bottom: 20px;

	${mobile({
		textAlign: "center",
	})}
`;
const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	border: 1px solid #fff;

	&::placeholder {
		color: #bdbdbd;
	}

	${mobile({
		width: "80%",
	})}
`;
const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;

	&:focus-visible {
		outline: none;
	}
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background-color: teal;
	color: #fff;
	cursor: pointer;
`;

const Alert = styled.div`
	display: block;
	height: 50px;
	width: 150px;
	position: absolute;
	top: 0px;
	left: 0px;
	background-color: rgba(6, 241, 226, 0.81);
	color: #03d0ff;
	transition: all 0.3s ease;
	opacity: 1;
	animation: ${AlertAnimation} 10s;
`;

const Newsletter = () => {
	const handleAlert = () => {
		console.log("Alert");
		alert("OK");
	};
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely upadates from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button onClick={handleAlert}>
					<Send />
				</Button>
				<Alert>OKOKOK!!!</Alert>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
