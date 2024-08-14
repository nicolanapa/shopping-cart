import React from "react";
import { useOutletContext } from "react-router-dom";
function Cart() {
	const [productsInCart, setProductsInCart] = useOutletContext();

	return (
		<section>
			<h3>Here&apos;s your Cart</h3>

			{productsInCart.length === 0 ? <p>Nothing here yet!</p> : productsInCart.map((product) => {})}
		</section>
	);
}

export { Cart };
