import React from "react";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { ErrorPage } from "./components/ErrorPage";
import { Header } from "./components/Header";

const routes = [
	{
		path: "/",
		element: <Header />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "shop",
				element: <Shop />,
			},
		],
	},
];

export { routes };
