import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";


// export const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
// 	},
// 	{
// 		path: "/products/:category",
// 		element: <ProductList />,
// 	},
// 	{
// 		path: "/product/:id",
// 		element: <Product />,
// 	},
// 	{
// 		path: "/register",
// 		element: user ? <Navigate replace to="/" /> : <Register />,
// 	},
// 	{
// 		path: "/login",
// 		element: user ? <Navigate replace to="/" /> : <Login />,
// 	},
// 	{
// 		path: "/cart",
// 		element: <Cart />,
// 	},
// 	{
// 		path: "/success",
// 		element: <Success />,
// 	},
// ]);
