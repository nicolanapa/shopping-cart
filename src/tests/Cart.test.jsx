import React from "react";
import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../routes";
import userEvent from "@testing-library/user-event";

describe("Testing that the Cart", () => {
	const router = createBrowserRouter(routes);

	it("renders correctly", async () => {
		const user = userEvent.setup();

		render(<RouterProvider router={router}></RouterProvider>);

		await user.click(screen.getByRole("link", { name: "Shop" }));
		await user.click(screen.getByAltText("Cart"));

		expect(screen.getByRole("heading", { level: 3, name: "Here's your Cart" })).toBeInTheDocument();

		screen.debug();
	});

	it("renders and disappears", async () => {
		const user = userEvent.setup();

		render(<RouterProvider router={router}></RouterProvider>);

		await user.click(screen.getByRole("link", { name: "Shop" }));
		await user.click(screen.getByAltText("Cart"));

		expect(screen.queryByRole("heading", { level: 3, name: "Here's your Cart" })).toBeInTheDocument();

		await user.click(screen.getByRole("link", { name: "Shop" }));

		expect(screen.queryByRole("heading", { level: 3, name: "Here's your Cart" })).not.toBeInTheDocument();

		screen.debug();
	});

	it("shows 'Nothing here yet!' when the Cart is empty", async () => {
		const user = userEvent.setup();

		render(<RouterProvider router={router}></RouterProvider>);

		await user.click(screen.getByRole("link", { name: "Shop" }));
		await user.click(screen.getByAltText("Cart"));

		expect(screen.queryByRole("heading", { level: 3, name: "Here's your Cart" })).toBeInTheDocument();

		expect(screen.queryByText("Nothing here yet!")).toBeInTheDocument();

		screen.debug();
	});

	it("shows up an added Product", async () => {
		const user = userEvent.setup();

		render(<RouterProvider router={router}></RouterProvider>);

		await user.click(screen.getByRole("link", { name: "Shop" }));
		await user.click(screen.getByAltText("Cart"));

		expect(screen.queryByRole("heading", { level: 3, name: "Here's your Cart" })).toBeInTheDocument();

		let addButtons = await screen.findAllByRole("button", { name: "Add" });
		let addCartButtons = await screen.findAllByRole("button", { name: "Add To Cart" });

		await user.click(addButtons[0]);
		await user.click(addCartButtons[0]);

		expect(screen.getAllByTestId("product-in-cart")).toHaveLength(1);
		expect(screen.getByTestId("amount-of-product")).toHaveTextContent(1);
		expect(screen.getByTestId("total-amount-in-cart")).toHaveTextContent("109.95 €");

		screen.debug();
	});

	it("shows up two same Products added in one .product-in-cart-container", async () => {
		const user = userEvent.setup();

		render(<RouterProvider router={router}></RouterProvider>);

		await user.click(screen.getByRole("link", { name: "Shop" }));
		await user.click(screen.getByAltText("Cart"));

		expect(screen.queryByRole("heading", { level: 3, name: "Here's your Cart" })).toBeInTheDocument();

		let addButtons = await screen.findAllByRole("button", { name: "Add" });
		let addCartButtons = await screen.findAllByRole("button", { name: "Add To Cart" });

		await user.click(addButtons[0]);
		await user.click(addCartButtons[0]);

		expect(screen.getAllByTestId("product-in-cart")).toHaveLength(1);
		expect(screen.getByTestId("amount-of-product")).toHaveTextContent(1);
		expect(screen.getByTestId("total-amount-in-cart")).toHaveTextContent("109.95 €");

		await user.click(addButtons[0]);
		await user.click(addCartButtons[0]);

		expect(screen.getAllByTestId("product-in-cart")).toHaveLength(1);
		expect(screen.getAllByTestId("amount-of-product")[0]).toHaveTextContent(2);
		expect(screen.getByTestId("total-amount-in-cart")).toHaveTextContent("219.9 €");
		screen.debug();
	});
});
