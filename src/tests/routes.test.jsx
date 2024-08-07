import React from "react";
import { describe, it, expect } from "vitest";
import { getAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, createBrowserRouter, MemoryRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Shop } from "../components/Shop";

describe("Testing that the Router", () => {
	it("displays the Header", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</MemoryRouter>
		);

		screen.debug();

		expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
	});

	it("displays the Home at default", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</MemoryRouter>
		);

		screen.debug();

		expect(screen.getByRole("heading", { level: 2, name: "Test Home" })).toBeInTheDocument();
	});

	it("displays the Home at /home", () => {
		render(
			<MemoryRouter initialEntries={["/home"]}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</MemoryRouter>
		);

		screen.debug();

		expect(screen.getByRole("heading", { level: 2, name: "Test Home" })).toBeInTheDocument();
	});

	it("displays the /shop and /home correctly", async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter initialEntries={["/"]}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</MemoryRouter>
		);

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
