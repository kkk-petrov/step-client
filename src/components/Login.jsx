import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	transition: all 0.2s ease-in;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: ${(props) => (props.isActive ? 1 : 0)};
	pointer-events: ${(props) => (props.isActive ? "all" : "none")};
	background: rgba(0, 0, 0, 0.3);
`;
const Wrapper = styled.div`
	padding: 20px;
	width: 25%;
	background-color: #fff;
	border-radius: 5px;

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

const Login = ({ active, setActive }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const handleLogin = (event) => {
		event.preventDefault();
		login(dispatch, { email, password });
	};

	return (
		<>
			<Container isActive={active} onClick={() => setActive(false)}>
				<Wrapper onClick={(e) => e.stopPropagation()}>
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
						<Button disabled={isFetching} onClick={handleLogin}>
							LOG IN
						</Button>
						{/* {error && (
							<Error>Something went wrong! Try again.</Error>
						)} */}
						<Link>DO NOT YOU REMEBER THE PASSWORD?</Link>
						<Link>CREATE AN ACCOUNT</Link>
					</Form>
				</Wrapper>
			</Container>
		</>
	);
};

export default Login;
