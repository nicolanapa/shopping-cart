import { describe, it } from "vitest";
import { fetchProduct } from "../components/fetchProduct";

describe("Testing that fetchProduct", () => {
	it("fetches and returns a Product", async () => {
		const productQuery = await fetchProduct(1);
	});

	it("fetches and returns a specific Product", async () => {
		const productQuery = await fetchProduct(1, 14);
	});

	it("fetches and returns 15 Products", async () => {
		const productQuery = await fetchProduct();
	});
});
