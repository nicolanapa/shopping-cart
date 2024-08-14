import React from "react";

function ProductInCart({ product }) {
	return (
		<div className="product-in-cart-container">
			<h4>{product.title}</h4>

			<div>
				<p>{product.amount}</p>
				<p>x</p>
				<h5>{product.price} €</h5>
			</div>
		</div>
	);
}

export { ProductInCart };
