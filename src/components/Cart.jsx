import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ProductInCart } from "./ProductInCart";
import { v7 as uuidv7 } from "uuid";

function Cart() {
	const [productsInCart, setProductsInCart] = useOutletContext();
	const [amount, setAmount] = useState(0);

	for (let i = 0; i < productsInCart.length; i++) {
		setAmount(setAmount + productsInCart[i].price * productsInCart[i].amount);
	}

	return (
		<section className="cart">
			<h3>Here&apos;s your Cart</h3>

			{productsInCart.length === 0 ? (
				<p>Nothing here yet!</p>
			) : (
				productsInCart.map((product) => {
					let randomKey = uuidv7();

					return (
						<div className="products-in-cart-container" key={randomKey}>
							<ProductInCart product={product} />

							<div>
								<p>{amount} €</p>
								<button>Pay Now!</button>
							</div>
						</div>
					);
				})
			)}
		</section>
	);
}

export { Cart };
