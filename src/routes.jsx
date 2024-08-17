import React from "react";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { ErrorPage } from "./components/ErrorPage";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Payout } from "./components/Payout";

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
				children: [
					{
						path: "cart",
						element: <Cart />,
						children: [
							{
								path: "payout",
								element: <Payout />,
							},
						],
					},
				],
			},
		],
	},
];

export { routes };
