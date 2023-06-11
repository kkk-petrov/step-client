import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 0.5s ease-out;

	${mobile({
		height: "20vh",
	})}
`;

const Background = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1;
	background-color: #000;
	width: 100%;
	height: 150px;

	opacity: 0.6;
	transition: all 0.3s ease;
`;

const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
	cursor: pointer;
	overflow: hidden;
	&:hover ${Image} {
		transform: scale(1.2);
		filter: blur(5px);
	}

	&:hover ${Background} {
		opacity: 0.8;
		/* height: 100%; */
		/* height: 150px; */
	}
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.h1`
	color: #fff;
	margin-bottom: 20px;
	font-size: 45px;
	color: #fff;
	/* border: 1px solid #222222; */
`;

const Logo = styled.img`
	position: relative;
	z-index: 2;
	width: 150px;
	filter: invert(1);
	opacity: 0.8;
`;

const Button = styled.button`
	border: none;
	width: 150px;
	padding: 15px 30px;
	background-color: #fff;
	color: #000;
	cursor: pointer;
	font-weight: 600;
	font-size: 16px;
`;

const Link = styled(NavLink)`
	color: #000;
	text-decoration: none;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Link to={`/products/${item.category}`}>
				<Image src={item.img} />
				<Info>
					<Background></Background>
					<Logo src={item.logo} />
					{/* <Button>SHOP NOW</Button> */}
				</Info>
			</Link>
		</Container>
	);
};

export default CategoryItem;
