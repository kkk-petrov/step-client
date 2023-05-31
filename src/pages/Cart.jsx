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
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/cartRedux";

const STRIPE_KEY =
	"pk_test_51MvzgdLzIZ7nqDD3yAzKLoqo37zAxj8JOwopdaqifdy7vWeFGM5jFaqaFx2QMSTqAEmb5v2eX84UDt93QQJOV3Xc00snhvKYic";

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
	border-radius: 5px;
	background-color: #fff;
	color: #000;
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
	justify-content: space-around;

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
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;

	${mobile({
		margin: "5px 15px",
	})}
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;

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
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 100%;
`;
const SummaryTitle = styled.h1`
	font-weight: 200;
`;
const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;
const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #000;
	color: #fff;
	font-weight: 500;
`;

const Cart = () => {
	console.log(STRIPE_KEY);

	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post("/checkout/payment", {
					tokenId: stripeToken.id,
					amount: cart.total * 100,
				});
				navigate("/success", { data: res.data });
			} catch (err) {}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, navigate]);

	const handleEmptyCart = () => {
		dispatch(emptyCart());
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
					<TopButton type="filled">Continue Shopping</TopButton>
					<TopButton onClick={handleEmptyCart}>Empty Cart</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart?.products.map((product) => (
							<Product>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<b>Product:</b> {product.title}
										</ProductName>
										<ProductId>
											<b>ID:</b>
											{product._id}
										</ProductId>
										<ProductSize>
											<b>Size:</b>
											{product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Remove />
										<ProductAmount>
											{product.quantity}
										</ProductAmount>
										<Add />
									</ProductAmountContainer>
									<ProductPrice>
										₴{" "}
										{parseInt(product.price) *
											product.quantity}
									</ProductPrice>
								</PriceDetail>
								<Hr />
							</Product>
						))}
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>₴ {cart.total}</SummaryItemPrice>
						</SummaryItem>

						<SummaryItem>
							<SummaryItemText>
								Estimated Shipping
							</SummaryItemText>
							<SummaryItemPrice>₴ 100</SummaryItemPrice>
						</SummaryItem>

						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>₴ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name="Step"
							image="https://i.ibb.co/q5VsSMq/logo.png"
							shippingAddress
							billingAddress
							description={`Your total is ₴${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={STRIPE_KEY}
						>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
