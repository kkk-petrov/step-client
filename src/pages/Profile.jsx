import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logout } from "../redux/userRedux";
import { emptyCart } from "../redux/cartRedux";
import Navbar from "../components/Navbar";
import { ScrollRestoration } from "react-router-dom";

const Container = styled.div``;

const Logout = styled.button``;

const Profile = () => {
	const dispatch = useDispatch();
	const handleLogout = (event) => {
		event.preventDefault();

		dispatch(logout());
		dispatch(emptyCart());
	};
	return (
		<Container>
			<ScrollRestoration />

			<Navbar />
			<Logout onClick={handleLogout}>Logout</Logout>
		</Container>
	);
};

export default Profile;
