import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
	/* padding: 0 0 100px 0; */
`;
const Wrapper = styled.div`
	height: 100vh;

	padding: 50px;
	display: flex;
	${mobile({
		padding: "10px",
		flexDirection: "column",
	})}
`;
const ImgContainer = styled.div`
	flex: 1;
	display: flex;
`;
const Image = styled.img`
	width: 80%;
	/* height: 100%; */
	object-fit: cover;
	transform: scaleX(-1);
	align-self: flex-start;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
	${mobile({
		padding: "10px",
	})}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0px;
	font-size: 16px;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;
const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;

	${mobile({
		width: "100%",
	})}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	margin-left: 5px;
	cursor: pointer;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mobile({
		width: "100%",
	})}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;
const Button = styled.button`
	padding: 15px;
	border: 1px solid #000;
	background: transparent;
	color: #000;
	cursor: pointer;
	font-weight: 500;
	transition: all 0.3s ease;

	&:hover {
		background-color: #000;
		color: #fff;
	}
`;

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState(0);
	const dispatch = useDispatch();

	const handleQuantity = (type) => {
		if (type === "inc") {
			setQuantity(quantity + 1);
		} else {
			quantity > 1 && setQuantity(quantity - 1);
		}
	};

	const handleButton = () => {
		console.log(size, !size, product, product.size, product.size[0]);
		dispatch(
			addProduct({
				...product,
				quantity,
				size: !size ? product.size[0] : size,
			})
		);
	};

	const handleSize = (event) => {
		setSize(event.target.value);
		console.log(product, size);
	};

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get("/products/find/" + id);
				setProduct(res.data);
			} catch {}
		};
		getProduct();
	}, [id]);

	console.log(product);

	return (
		<Container>
			<ScrollRestoration />

			{/* <Announcement /> */}
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>
						{product.desc}
						<br />
						<br />
						<>
							Ми пропонуємо виключно оригінальну продукцію з
							Європи і США, яку доставляємо по всій Україні.
							Завдяки прямим поставкам від виробника, ми можемо
							гарантувати, що купуючи у нас, ви отримуєте
							оригінальну модель.
						</>
					</Desc>
					<Price>₴ {product.price}</Price>
					<FilterContainer>
						{/* <Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color?.map((c) => (
								<FilterColor
									color={c}
									key={c}
									onClick={() => setColor(c)}
								/>
							))}
						</Filter> */}
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={handleSize}>
								{product.size?.map((s) => (
									<FilterSizeOption key={s}>
										{s}
									</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove
								style={{ cursor: "pointer" }}
								onClick={() => handleQuantity("dec")}
							/>
							<Amount>{quantity}</Amount>
							<Add
								style={{ cursor: "pointer" }}
								onClick={() => handleQuantity("inc")}
							/>
						</AmountContainer>
						<Button onClick={handleButton}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Product;
