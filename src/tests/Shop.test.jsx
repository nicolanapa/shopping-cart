import React, { act } from "react";
import { describe, it, expect } from "vitest";
import { screen, render, waitFor } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../routes";
import userEvent from "@testing-library/user-event";

describe("Testing that Shop", () => {
	const router = createBrowserRouter(routes);

	it("renders all 15 Products", async () => {
		const user = userEvent.setup();

		render(<RouterProvider router={router}></RouterProvider>);

		await user.click(screen.getByRole("link", { name: "Shop" }));

		expect(screen.getAllByRole("heading", { level: "3" })).toHaveLength(15);

		screen.debug();
	});
}, 10000);
