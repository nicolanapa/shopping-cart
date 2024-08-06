import React from "react";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { ErrorPage } from "./components/ErrorPage";

const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "shop",
		element: <Shop />,
	},
];

export { routes };
