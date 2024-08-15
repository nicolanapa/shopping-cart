import React from "react";

function ProductInCart({ product }) {
	return (
		<div data-testid="product-in-cart" className="product-in-cart-container">
			<h4>{product.title}</h4>

			<div className="amount-container">
				<p data-testid="amount-of-product">{product.amount}</p>
				<p>x</p>
				<h5>{product.price} €</h5>
			</div>
		</div>
	);
}

export { ProductInCart };
