import React, { useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	color: #fff
		${mobile({
			display: "none",
		})};
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff;
	/* background-color: #fff7f7; */
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	cursor: pointer;
	z-index: 2;
	border: 1px solid #fff;

	transition: all 0.1s ease-out;

	&:hover {
		transform: scale(1.1);
		border: 1px solid #2196f310;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: all 1s ease;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: ${(props) => props.bg};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	padding: 50px;
`;

const Image = styled.img`
	height: 80%;
	margin-left: 100px;
	margin-top: 50px;
	/* filter: drop-shadow(5px 8px 7px #000); */
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
	/* background-color: #202020;
	height: 100%;
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column; */
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
	max-width: 650px;
`;
const Link = styled(NavLink)`
	text-decoration: none;
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	border: 1px solid #000;
	transition: all 0.3s ease;
	color: #000;

	&:hover {
		border: 1px solid #2196f3;
		color: #2196f3;
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Link to="/products">SHOW NOW</Link>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
