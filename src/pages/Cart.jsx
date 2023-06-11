import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/cartRedux";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;

	${mobile({
		padding: "10px",
	})}
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 50px;
`;
const TopButton = styled.button`
	position: relative;
	padding: 10px;
	font-weight: 400;
	cursor: pointer;
	border: 1px solid #000;
	background-color: #fff;
	color: #000;
	transition: all 0.3s ease;

	&:hover {
		background-color: #000;
		color: #fff;
	}
`;

const TopTexts = styled.div`
	${mobile({
		display: "none",
	})}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 50px;

	${mobile({
		flexDirection: "column",
		padding: "0px 25px",
	})}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
	${mobile({
		flexDirection: "column",
	})}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;

	${mobile({
		flexDirection: "column",
	})}
`;
const Image = styled.img`
	width: 342px;
	height: 100%;
	transform: scaleX(-1);
	margin-right: 20px;
	${mobile({
		width: "40vw",
		marginBottom: "20px",
	})}
`;
const Details = styled.div`
	padding: 0px 20px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 10px;
	margin-bottom: 30px;

	${mobile({
		padding: "0px",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "space-between",
	})}
`;
const ProductName = styled.span`
	${mobile({
		width: "100%",
		marginBottom: "10px",
	})}
`;
const ProductId = styled.span``;
const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
	/* flex: 1; */
	padding: 0 20px;
	display: flex;
	align-items: start;
	justify-content: start;
	flex-direction: column;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div``;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	background: #000;
	color: #fff;
	padding: 5px;

	${mobile({
		marginBottom: "20px",
	})}
`;

const Hr = styled.hr`
	border: none;
	height: 1px;
	background-color: #eee;
`;

const Summary = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #000;
	/* border-radius: 5px; */
	padding: 20px;
	height: 100%;
	min-height: 340px;

	${mobile({
		minHeight: "0px",
	})}
`;
const SummaryTitle = styled.h1`
	font-weight: 200;
	margin-bottom: 30px;
`;
const SummaryItem = styled.div`
	margin: 0px 0px 10px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
	margin-top: ${(props) => props.type === "total" && "30px"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;
const Button = styled.button`
	width: 100%;
	padding: 10px;
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

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleCheckout = () => {
		axios
			.post(`${BASE_URL}/checkout/payment`, {
				products: cart.products,
				user: user._id,
			})
			.then((res) => {
				if (res.data.url) {
					window.location.href = res.data.url;
				}
			})
			.catch((err) => console.log(err.message));
	};

	const handleEmptyCart = () => {
		dispatch(emptyCart());
	};

	const handleContinueShopping = () => {
		navigate("/products");
	};

	return (
		<Container>
			{/* <Announcement /> */}
			<Navbar />
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top>
					{/* <TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts> */}
					<TopButton onClick={handleContinueShopping} type="filled">
						Continue Shopping
					</TopButton>
					<TopButton onClick={handleEmptyCart}>Empty Cart</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart?.products.map((product) => (
							<Product>
								<ProductDetail>
									<Image src={product.img} />
									<div
										style={{
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Details>
											<ProductName>
												<b>Product:</b> {product.title}
											</ProductName>
											<ProductId>
												<b>ID:</b> {product._id}
											</ProductId>
											<ProductSize>
												<b>Size:</b> {product.size}
											</ProductSize>
											<ProductAmount>
												<b>Quantity:</b>{" "}
												{product.quantity}
											</ProductAmount>
										</Details>
										<PriceDetail>
											{/* <ProductAmountContainer>
												<Remove />
												
												<Add />
											</ProductAmountContainer> */}
											<ProductPrice>
												₴{" "}
												{parseInt(product.price) *
													product.quantity}
											</ProductPrice>
										</PriceDetail>
									</div>
								</ProductDetail>

								<Hr />
							</Product>
						))}
					</Info>
					<Summary>
						<div>
							<SummaryTitle>ORDER SUMMARY</SummaryTitle>
							<div>
								<SummaryItem>
									<SummaryItemText>Subtotal</SummaryItemText>
									<SummaryItemPrice>
										₴ {cart.total}
									</SummaryItemPrice>
								</SummaryItem>

								<SummaryItem>
									<SummaryItemText>
										Estimated Shipping
									</SummaryItemText>
									<SummaryItemPrice>₴ 100</SummaryItemPrice>
								</SummaryItem>

								<SummaryItem>
									<SummaryItemText>
										Shipping Discout
									</SummaryItemText>
									<SummaryItemPrice>₴ -100</SummaryItemPrice>
								</SummaryItem>

								<SummaryItem type="total">
									<SummaryItemText>Total</SummaryItemText>
									<SummaryItemPrice>
										₴ {cart.total}
									</SummaryItemPrice>
								</SummaryItem>
							</div>
						</div>

						<Button onClick={handleCheckout}>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
