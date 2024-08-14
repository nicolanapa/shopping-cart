import React, { useEffect, useState } from "react";
import { fetchProduct } from "./fetchProduct";
import { Product } from "./Product";
import { v7 as uuidv7 } from "uuid";
import { Outlet, useOutletContext } from "react-router-dom";

function Shop() {
	const [allFetchedProducts, setallFetchedProducts] = useState([]);
	const [amountOfProductsInIconCart, setamountOfProductsInIconCart] = useOutletContext();
	const [productsInCart, setProductsInCart] = useState([]);

	useEffect(() => {
		async function fetchEverythingThenRender() {
			let tempallFetchedProducts = await fetchProduct();
			setallFetchedProducts(tempallFetchedProducts);
		}

		fetchEverythingThenRender();
	}, []);

	return (
		<main>
			<h2 data-testid="title" className="title center">
				Shop
			</h2>

			<Outlet context={[productsInCart, setProductsInCart]} />

			<section className="all-products-container">
				{allFetchedProducts.map((product) => {
					let randomKey = uuidv7();
					return (
						<Product
							allFetchedProductsInCart={[productsInCart, setProductsInCart]}
							product={product}
							cart={[amountOfProductsInIconCart, setamountOfProductsInIconCart]}
							key={randomKey}
						/>
					);
				})}
			</section>
		</main>
	);
}

export { Shop };
