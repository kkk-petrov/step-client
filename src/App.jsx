import React from "react";
import {
	RouterProvider,
	Navigate,
	createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./main.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

// import { router } from "./routing";

const App = () => {
	const user = useSelector((state) => state.user.currentUser);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/products/:category",
			element: <ProductList />,
		},
		{
			path: "/products/",
			element: <ProductList />,
		},
		{
			path: "/product/:id",
			element: <Product />,
		},
		{
			path: "/register",
			element: user ? <Navigate replace to="/" /> : <Register />,
		},
		{
			path: "/login",
			element: user ? <Navigate replace to="/" /> : <Login />,
		},
		{
			path: "/cart",
			element: <Cart />,
		},
		{
			path: "/success",
			element: <Success />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
