import { logo } from "../data";
import styled from "styled-components";
import {
	Facebook,
	Instagram,
	MailOutline,
	Telegram,
	Phone,
	Room,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	padding: 0 50px;

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
const Desc = styled.p`
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
	return (
		<Container>
			<Left>
				<Logo src={logo.img}></Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humour, or randomized words which dont
					look even slightly believable.
				</Desc>
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
		</Container>
	);
};

export default Footer;
