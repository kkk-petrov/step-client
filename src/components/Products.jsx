import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../requestMethods";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	${mobile({
		padding: "0px",
	})}
`;

const Products = ({ category, filters, sort, searchTerm, latest }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				let url = category
					? `${BASE_URL}/products/?category=${category}`
					: `${BASE_URL}/products`;

				if (searchTerm) {
					url += `/?search=${searchTerm}`;
				}

				if (latest) url = `${BASE_URL}/products/?new=8`;

				const res = await axios.get(url);
				setProducts(res.data);
				console.log(res.data);
			} catch (err) {}
		};
		getProducts();
	}, [category, searchTerm, latest]);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, category, filters]);

	useEffect(() => {
		if (sort === "newest") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === "asc") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else if (sort === "desc") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{category
				? filteredProducts.map((item) => (
						<Product item={item} key={item.id} />
				  ))
				: products.map((item) => <Product item={item} key={item.id} />)}
		</Container>
	);
};

export default Products;
