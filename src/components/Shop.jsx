import React, { useEffect, useState } from "react";
import { fetchProduct } from "./fetchProduct";
import { Product } from "./Product";
import { v7 as uuidv7 } from "uuid";
import { Outlet, useOutletContext } from "react-router-dom";

function Shop() {
	const [allProducts, setAllProducts] = useState([]);
	const [productsInCart, setProductsInCart] = useOutletContext();

	useEffect(() => {
		async function fetchEverythingThenRender() {
			let tempAllProducts = await fetchProduct();
			setAllProducts(tempAllProducts);
		}

		fetchEverythingThenRender();
	}, []);

	return (
		<main>
			<h2 data-testid="title" className="title center">
				Shop
			</h2>

			<Outlet />

			<section className="all-products-container">
				{allProducts.map((product) => {
					let randomKey = uuidv7();
					return <Product product={product} key={randomKey} />;
				})}
			</section>
		</main>
	);
}

export { Shop };
