import React from "react";
import { useOutletContext } from "react-router-dom";
import { ProductInCart } from "./ProductInCart";
import { v7 as uuidv7 } from "uuid";

function Cart() {
	const [productsInCart, setProductsInCart] = useOutletContext();

	return (
		<section>
			<h3>Here&apos;s your Cart</h3>

			{productsInCart.length === 0 ? (
				<p>Nothing here yet!</p>
			) : (
				productsInCart.map((product) => {
					let randomKey = uuidv7();

					return <ProductInCart product={product} key={randomKey} />;
				})
			)}
		</section>
	);
}

export { Cart };
