import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		90deg,
		rgba(252, 241, 237, 1) 56%,
		rgba(228, 231, 240, 1) 88%
	);
`;
const Wrapper = styled.div`
	padding: 20px;
	width: 25%;
	background-color: #fff;

	${mobile({
		width: "75%",
	})}
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`;
const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: #fff;
	cursor: pointer;

	margin-bottom: 10px;

	&:disabled {
		color: teal;
		cursor: not-allowed;
	}
`;

const Error = styled.span`
	color: red;
	margin: 10px 0px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (event) => {
		event.preventDefault();
		login(dispatch, { email, password });
	};

	return (
		<>
			<Navbar />
			<Container>
				<Wrapper>
					<Title>LOGIN</Title>
					<Form>
						<Input
							placeholder="email"
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
						<Input
							placeholder="password"
							type="password"
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						/>
						<Button disabled={isFetching} onClick={handleClick}>
							LOG IN
						</Button>
						{error && <Error>Something went wrong...</Error>}
						<Link>DO NOT YOU REMEBER THE PASSWORD?</Link>
						<Link>CREATE AN ACCOUNT</Link>
					</Form>
				</Wrapper>
			</Container>
		</>
	);
};

export default Login;
