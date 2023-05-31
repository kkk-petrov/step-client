import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";

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
	width: 40%;
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
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;
const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: #fff;
	cursor: pointer;
`;
const Error = styled.span`
	color: red;
	margin: 10px 0px;
`;

const Register = ({ active, setActive }) => {
	const [userData, setUserData] = useState({});
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setUserData((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});

		console.log(userData);
	};

	const handleRegister = (event) => {
		event.preventDefault();

		register(dispatch, userData);
	};

	return (
		<Container isActive={active} onClick={() => setActive(false)}>
			<Wrapper onClick={(e) => e.stopPropagation()}>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input
						onChange={handleChange}
						name="name"
						placeholder="name"
					/>
					<Input
						onChange={handleChange}
						name="username"
						placeholder="username"
					/>
					<Input
						onChange={handleChange}
						name="email"
						placeholder="email"
					/>
					<Input
						onChange={handleChange}
						name="password"
						placeholder="password"
					/>
					<Agreement>
						By creating an acount, I consent to the processing oof
						my personal data in accordance with the{" "}
						<a href="#privacy">PRIVACY POLICY</a>
					</Agreement>
					<Button onClick={handleRegister}>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
