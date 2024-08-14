import React, { act } from "react";
import { describe, it, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
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

		await user.click(screen.queryAllByRole("button", { name: "Add" })[0]);

		expect(screen.queryAllByTestId("product-in-cart")).toBe(1);
		expect(screen.queryAllByTestId("total-amount-in-cart")).toBe("109.95 €");

		await user.click(screen.queryAllByRole("button", { name: "Add" })[0]);

		expect(screen.queryAllByTestId("product-in-cart")).toBe(2);
		expect(screen.queryAllByTestId("amount-of-product")).toHaveLength(1);
		expect(screen.queryAllByTestId("total-amount-in-cart")).toBe("219.9 €");
		screen.debug();
	});
});
