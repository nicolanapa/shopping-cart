import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ProductInCart } from "./ProductInCart";
import { v7 as uuidv7 } from "uuid";
import "../styles/productInCart.css";

function Cart() {
	const [productsInCart, setProductsInCart] = useOutletContext();
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		console.log(productsInCart);

		if (productsInCart.length !== 0) {
			let tempAmount = 0;

			for (let i = 0; i < productsInCart.length; i++) {
				let tempCalculation = productsInCart[i].price * productsInCart[i].amount;
				tempAmount += tempCalculation;
			}

			setAmount(tempAmount);
		} else {
			setAmount(0);
		}
	}, [productsInCart]);

	return (
		<section className="cart">
			<h3>Here&apos;s your Cart</h3>

			{!Array.isArray(productsInCart) || productsInCart.length === 0 ? (
				<p>Nothing here yet!</p>
			) : (
				<div className="products-in-cart-container">
					{productsInCart.map((product) => {
						let randomKey = uuidv7();

						return <ProductInCart product={product} key={randomKey} />;
					})}

					<div>
						<p data-testid="total-amount-in-cart">{Math.round(amount * 100) / 100} €</p>
						<button>Pay Now!</button>
					</div>
				</div>
			)}
		</section>
	);
}

export { Cart };
