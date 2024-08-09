import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Product } from "../components/Product";
import { fetchProduct } from "../components/fetchProduct";

describe("Testing that Product", () => {
	const product1 = {
		id: 1,
		title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		price: 109.95,
		description:
			"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		rating: { rate: 3.9, count: 120 },
	};

	it("get rendered correctly", async () => {
		render(<Product product={await fetchProduct("", 1)} />);

		screen.debug();

		expect(screen.getAllByAltText("Full Star")).toHaveLength(3);
		expect(screen.getAllByAltText("Half Star")).toHaveLength(1);
		expect(screen.getByText(product1.price)).toBeInTheDocument();
		expect(screen.getByRole("heading", { level: 3, name: product1.name })).toBeInTheDocument();
		expect(screen.getByRole("heading", { level: 4, name: product1.price })).toBeInTheDocument();
		expect(screen.getByAltText(product1.title)).toBeInTheDocument();
	});
});
