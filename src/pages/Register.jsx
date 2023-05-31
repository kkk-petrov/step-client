import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		306deg,
		rgba(228, 231, 240, 1),
		rgba(252, 241, 237, 1)
	);
`;
const Wrapper = styled.div`
	padding: 20px;
	width: 40%;
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

const Register = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Form>
						<Input placeholder="name" />
						<Input placeholder="last name" />
						<Input placeholder="username" />
						<Input placeholder="email" />
						<Input placeholder="password" />
						<Input placeholder="confirm password" />
						<Agreement>
							By creating an acount, I consent to the processing
							oof my personal data in accordance with the{" "}
							<b>PRIVACY POLICY</b>
						</Agreement>
						<Button>CREATE</Button>
					</Form>
				</Wrapper>
			</Container>
		</>
	);
};

export default Register;
