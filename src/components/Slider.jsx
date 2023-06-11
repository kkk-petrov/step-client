import React, { useCallback, useEffect, useRef, useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled, { keyframes } from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

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
	/* border: 1px solid #fff; */
	box-shadow: 1px 1px 2px rgba(0, 0, 0);

	transition: all 0.1s ease-out;

	&:hover {
		/* box-shadow: 1px 3px 2px rgba(0, 0, 0); */

		transform: scale(1.1);

		/* border: 1px solid #000; */
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: all 0.8s ease;
	/* background: linear-gradient(
		45deg,
		rgba(252, 241, 237, 1),
		rgba(228, 231, 240, 1),
		rgb(250, 237, 252),
		rgb(228, 240, 232)
	); */

	background: radial-gradient(
		circle,
		rgba(207, 222, 255, 1) 0%,
		rgba(206, 191, 255, 1) 17%,
		rgba(198, 159, 240, 1) 35%,
		rgba(191, 175, 228, 1) 52%,
		rgba(167, 231, 188, 1) 69%,
		rgba(221, 245, 255, 1) 85%,
		rgba(241, 243, 149, 1) 100%
	);
	background-repeat: no-repeat;
	background-size: 500% 500%;
	animation: ${Gradient} 50s ease infinite;
	background-position: center;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: transparent;
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
	border-radius: ${(props) => props.radius && "20px"};
	box-shadow: ${(props) => props.radius && "2px 2px 7px #000"};
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
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
	cursor: pointer;
	transition: all 0.3s ease;

	color: #000;
	background: transparent;
	border: 1px solid #000;

	&:hover {
		border: 1px solid #fff;
		color: #fff;
		background-color: #000;
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
							<Image radius={item.radius} src={item.img} />
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
