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
});
