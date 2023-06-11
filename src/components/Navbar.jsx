import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import { logo } from "../data";
import { mobile } from "../responsive";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
import { emptyCart } from "../redux/cartRedux";
import Register from "./Register";
import Login from "./Login";

const Container = styled.div`
	height: 50px;
	position: sticky;
	top: 0;
	z-index: 100;
	background-color: #fff;

	${mobile({
		height: "50px",
	})}
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	${mobile({
		padding: "10px 0px",
	})}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({
		display: "none",
	})}
`;

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	margin-left: 25px;
	padding: 5px;
	width: 200px;
	transition: all 0.2s ease;

	&::after {
		content: "";
		height: 1px;
		background-color: #000;
		opacity: 0.5;
		width: 0px;
		position: absolute;
		bottom: 5px;
		left: 39px;
		transition: all 0.2s ease;

		${(props) =>
			props.isSearchOpened &&
			css`
				width: calc(100% - 39px);
			`}
	}
`;

const Input = styled.input`
	outline: none;
	border: none;
	background: transparent;
	width: 100%;
	opacity: ${(props) => (props.isSearchOpened ? "1" : "0")};
	transition: all 0.2s ease;
	margin-left: 10px;

	&::placeholder {
		color: #000;
	}
	${mobile({
		width: "50%",
	})};
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.img`
	display: block;
	height: 30px;
	width: 90px;
	margin: 0 auto;
	cursor: pointer;
	filter: brightness(-100%);

	${mobile({
		marginLeft: "15px",
	})}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	justify-content: flex-end;

	${mobile({
		justifyContent: "center",
		flex: 2,
	})}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	transition: all 0.3s ease;

	&:hover {
		text-decoration: underline;

		/* color: #0e89ea; */
		color: #202020;
	}

	${mobile({
		fontSize: "12px",
		marginLeft: "10px",
	})}
`;

const Cart = styled(MenuItem)`
	/* transition: all 0.3s ease;
	padding: 5px;
	border-radius: 100%;
	color: #fff;
	background-color: #000; */
	&:hover {
	}
`;

const Link = styled(NavLink)`
	color: #000;
	text-decoration: none;
	transition: all 0.3s ease;

	&:hover {
		/* color: #202020; */
	}
`;

const Navbar = () => {
	const user = useSelector((state) => state.user.currentUser);

	const quantity = useSelector((state) => state.cart.quantity);

	const [loginModalActive, setLoginModalActive] = useState(false);
	const [registerModalActive, setRegisterModalActive] = useState(false);
	const [isSearchOpened, setIsSearchOpened] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();
	const inputRef = useRef(null);

	const handleSearch = () => {
		isSearchOpened && navigate(`/products/?search=${searchTerm.trim()}`);
		setIsSearchOpened(!isSearchOpened);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (inputRef.current && !inputRef.current.contains(event.target)) {
				setIsSearchOpened(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<Container>
			<Wrapper>
				<Left>
					{/* <Language>EN</Language> */}
					<SearchContainer
						ref={inputRef}
						isSearchOpened={isSearchOpened}
					>
						<Search
							onClick={handleSearch}
							style={{
								color: "#000",
								fontSize: 24,
								cursor: "pointer",
							}}
						/>
						<Input
							isSearchOpened={isSearchOpened}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Search"
						></Input>
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/">
						<Logo src={logo.img} />
					</Link>
				</Center>
				<Right>
					{user ? (
						<Link to="/profile">
							<Avatar
								src={
									user.image ||
									"https://ionicframework.com/docs/img/demos/avatar.svg"
								}
								style={{
									width: "20px",
									height: "20px",
									cursor: "pointer",
									filter: "grayscale(100%)",
								}}
							/>
						</Link>
					) : (
						<>
							<MenuItem
								onClick={() => setRegisterModalActive(true)}
							>
								REGISTER
							</MenuItem>
							<Register
								active={registerModalActive}
								setActive={setRegisterModalActive}
							/>

							<MenuItem onClick={() => setLoginModalActive(true)}>
								LOGIN
							</MenuItem>
							<Login
								active={loginModalActive}
								setActive={setLoginModalActive}
							/>
						</>
					)}

					<Link to="/cart">
						<Cart>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined></ShoppingCartOutlined>
							</Badge>
						</Cart>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
