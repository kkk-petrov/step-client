import {
	SearchOutlined,
	ShoppingCartOutlined,
	FavoriteBorderOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.5s ease;
	border-radius: 5px;
`;

const Image = styled.img`
	height: 100%;
	z-index: 2;
	transition: all 0.5s ease;

	${mobile({
		height: "40%",
	})}
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 370px;
	height: 350px;
	display: flex;
	background-color: #f8f8f8;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	&:hover ${Info} {
		opacity: 1;
	}

	&:hover ${Image} {
		transform: scale(1.1);
		/* filter: blur(1px); */
	}
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Link = styled(NavLink)`
	color: #000;
	text-decoration: none;
`;

const Product = ({ item }) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		console.log(!item, item, item.size, item.size[0]);
		const product = { ...item, quantity: 1, size: item.size[0] };
		dispatch(addProduct(product));
		console.log(product);
	};
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined onClick={handleAddToCart} />
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`}>
						<SearchOutlined />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
