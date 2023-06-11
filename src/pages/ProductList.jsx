import React, { useState } from "react";

import styled from "styled-components";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { ScrollRestoration, useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
`;
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	margin: 20px;
	display: flex;
	align-items: center;
	flex-direction: row;
	${mobile({
		margin: "0px 20px",
		display: "flex",
		flexDirection: "column",
	})}
`;
const FilterText = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({
		marginRight: "0px",
	})}
`;
const Select = styled.select`
	padding: 10px;
	margin-right: 20px;

	${mobile({
		margin: "10px 0px",
	})}
`;
const Option = styled.option``;

const ProductList = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const category = location.pathname.split("/")[2] || "";
	const searchTerm = searchParams.get("search") || "";
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilters = (event) => {
		const value = event.target.value;

		setFilters({
			...filters,
			[event.target.name]: value.toString().toLowerCase(),
		});
	};

	console.log(filters);

	return (
		<Container>
			<ScrollRestoration />
			{/* <Announcement /> */}
			<Navbar />
			<Title>{category.toUpperCase()}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter:</FilterText>
					<Select name="size" onChange={handleFilters}>
						<Option disabled>Size</Option>
						<Option>40</Option>
						<Option>41</Option>
						<Option>42</Option>
						<Option>43</Option>
						<Option>44</Option>
					</Select>
					{/* <Select name="color" onChange={handleFilters}>
						<Option disabled>Color</Option>
						<Option>White</Option>
						<Option>Red</Option>
						<Option>Green</Option>
						<Option>Blue</Option>
						<Option>Black</Option>
					</Select> */}
				</Filter>
				<Filter>
					<FilterText>Sort:</FilterText>
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value="newest" selected>
							Newest
						</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="desc">Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products
				searchTerm={searchTerm}
				category={category}
				filters={filters}
				sort={sort}
			/>
			<Footer />
		</Container>
	);
};

export default ProductList;
