import { logo } from "../data";
import styled, { keyframes } from "styled-components";
import {
	Facebook,
	Instagram,
	MailOutline,
	Telegram,
	Phone,
	Room,
	Send,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Container = styled.div`
	background: linear-gradient(
		45deg,
		rgba(245, 250, 253, 1),
		rgba(252, 241, 237, 1),
		rgba(228, 231, 240, 1)
	);
	background-repeat: no-repeat;
	background-size: 200% 200%;
	animation: ${Gradient} 5s ease infinite;
	background-position: center;
`;

const NewsletterContainer = styled.div`
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
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

const Wrapper = styled.div`
	display: flex;
	padding: 50px;
	background-color: #fff;

	${mobile({
		flexDirection: "column",
	})}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.img`
	margin: 0;
	margin-top: -5px;
	width: 100px;
	height: 30px;
`;
const Description = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: #fff;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;

	${mobile({
		backgroundColor: "#fff8f8",
	})}
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Right = styled.div`
	flex: 1;
	padding: 20px;

	${mobile({
		backgroundColor: "#fff8f8",
		display: "none",
	})}
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

// const Payment = styled.img`
// 	width: 50%;
// `;
// <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

const Footer = () => {
	const handleAlert = () => {
		alert("OK");
	};
	return (
		<Container>
			<NewsletterContainer>
				<Desc>Get timely updates from your favorite products.</Desc>
				<InputNewsletterContainer>
					<Input placeholder="Your email" />
					<Button onClick={handleAlert}>
						<Send />
					</Button>
				</InputNewsletterContainer>
			</NewsletterContainer>
			<Wrapper>
				<Left>
					<Logo src={logo.img}></Logo>
					<Description>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered alteration in
						some form, by injected humour, or randomized words which
						dont look even slightly believable.
					</Description>
					<SocialContainer>
						<SocialIcon color="385999">
							<Facebook />
						</SocialIcon>
						<SocialIcon color="E4405F">
							<Instagram />
						</SocialIcon>
						<SocialIcon color="55ACEE">
							<Telegram />
						</SocialIcon>
					</SocialContainer>
				</Left>
				<Center>
					<Title>Contacts</Title>
					<ContactItem>
						<Room style={{ marginRight: "10px" }} />
						Ukraine
					</ContactItem>
					<ContactItem>
						<Phone style={{ marginRight: "10px" }} />
						+38 096 090 59 28
					</ContactItem>
					<ContactItem>
						<MailOutline style={{ marginRight: "10px" }} />
						step@petrov.dev
					</ContactItem>
				</Center>
				<Right>
					<Title>Useful Links</Title>
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Cart</ListItem>
						<ListItem>My Account</ListItem>
						<ListItem>Wishlist</ListItem>
						<ListItem>Terms</ListItem>
					</List>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Footer;
