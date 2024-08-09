import { describe, expect, it } from "vitest";
import { fetchProduct } from "../components/fetchProduct";

describe("Testing that fetchProduct", () => {
	it("fetches and returns a Product", async () => {
		const productQuery = await fetchProduct("", 1);

		expect(productQuery).toMatchObject({
			id: 1,
			title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
			price: 109.95,
			description:
				"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
			category: "men's clothing",
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			rating: { rate: 3.9, count: 120 },
		});
	});

	it("fetches and returns 15 Products", async () => {
		const productQuery = await fetchProduct();

		expect(productQuery).toHaveLength(15);
	});
});
