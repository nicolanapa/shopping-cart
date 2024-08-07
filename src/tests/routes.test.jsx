import React from "react";
import { describe, it, expect } from "vitest";
import { getAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../routes";

describe("Testing that the Router", () => {
	const router = createBrowserRouter(routes);

	it("displays the Header", () => {
		render(<RouterProvider router={router}></RouterProvider>);

		screen.debug();

		expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
	});

	it("displays the Home at default", () => {
		render(<RouterProvider router={router}></RouterProvider>);

		screen.debug();

		expect(screen.getByRole("heading", { level: 2, name: "Test Home" })).toBeInTheDocument();
	});

	it("displays the Home at /home", () => {
		render(<RouterProvider router={router}></RouterProvider>);

		screen.debug();

		expect(screen.getByRole("heading", { level: 2, name: "Test Home" })).toBeInTheDocument();
	});

	it("displays the /shop and /home correctly", async () => {
		const user = userEvent.setup();

		render(<RouterProvider router={router}></RouterProvider>);

		screen.debug();

		expect(screen.getByRole("heading", { level: 2, name: "Test Home" })).toBeInTheDocument();

		const headerLinks = [screen.getByRole("link", { name: "Home" }), screen.getByRole("link", { name: "Shop" })];

		await user.click(headerLinks[1]);

		screen.debug();

		expect(screen.getByRole("heading", { level: 2, name: "Test Shop" })).toBeInTheDocument();

		await user.click(headerLinks[0]);

		expect(screen.getByRole("heading", { level: 2, name: "Test Home" })).toBeInTheDocument();
	});
});
