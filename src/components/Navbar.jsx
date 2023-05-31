import React, { useState } from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import { logo } from "../data";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";
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
	border-bottom: 1px solid #000;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	outline: none;
	border: none;
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
	${mobile({
		fontSize: "12px",
		marginLeft: "10px",
	})}
`;

const Link = styled(NavLink)`
	color: #000;
	text-decoration: none;
	transition: all 0.3s ease;

	&:hover {
		color: #2196f3;
	}
`;

const Navbar = () => {
	const user = useSelector((state) => state.user.currentUser);

	const quantity = useSelector((state) => state.cart.quantity);
	const dispatch = useDispatch();

	const [loginModalActive, setLoginModalActive] = useState(false);
	const [registerModalActive, setRegisterModalActive] = useState(false);

	const handleLogout = (event) => {
		event.preventDefault();

		dispatch(logout());
		dispatch(emptyCart());
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search"></Input>
						<Search style={{ color: "#000", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/">
						<Logo src={logo.img} />
					</Link>
				</Center>
				<Right>
					{user ? (
						<Avatar
							src="https://ionicframework.com/docs/img/demos/avatar.svg"
							style={{
								width: "20px",
								height: "20px",
								cursor: "pointer",
							}}
							onClick={handleLogout}
						/>
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
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined></ShoppingCartOutlined>
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
