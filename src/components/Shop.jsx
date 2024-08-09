import React, { useEffect, useState } from "react";
import { fetchProduct } from "./fetchProduct";
import { Product } from "./Product";
import { v7 as uuidv7 } from "uuid";

function Shop() {
	const [allProducts, setAllProducts] = useState([]);
	const [allRenderedProducts, setAllRenderedProducts] = useState([]);

	useEffect(() => {
		async function fetchEverythingThenRender() {
			let tempAllProducts = await fetchProduct();
			setAllProducts(tempAllProducts);
		}

		fetchEverythingThenRender();
	}, []);

	useEffect(() => {
		if (allProducts.length > 0) {
			console.log("EVERYTHING", allProducts);
			let tempAllRenderedProducts = allRenderedProducts.splice();

			for (let i = 0; i < 15; i++) {
				let randomKey = uuidv7();

				if (tempAllRenderedProducts.length === 0) {
					setAllRenderedProducts(<Product product={allProducts[i]} key={randomKey} />);
					tempAllRenderedProducts.push(<Product product={allProducts[i]} key={randomKey} />);
				} else {
					tempAllRenderedProducts.push(<Product product={allProducts[i]} key={randomKey} />);
				}
			}

			setAllRenderedProducts(tempAllRenderedProducts);
			console.log("TO RENDER", allRenderedProducts);
		}
	}, [allProducts]);

	return (
		<main>
			<h2 data-testid="title" className="title center">
				Shop
			</h2>

			<section className="all-products-container">{allRenderedProducts}</section>
		</main>
	);
}

export { Shop };
