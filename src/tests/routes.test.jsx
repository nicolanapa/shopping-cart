import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";

describe("Testing that the Router", () => {
	it("displays the Header", () => {
		render(<Header />, { wrapper: BrowserRouter });

		screen.debug();

		expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
	});
});
