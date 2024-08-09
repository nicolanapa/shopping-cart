import React from "react";
import "../styles/product.css";

function Product({ product }) {
	return (
		<div className="product-container">
			<p className="category">{product.category}</p>
			{/*Stars and rating count*/}
			<h3 className="product-title">{product.title}</h3>
			<p>{product.description}</p>

			<h4>{product.price}</h4>

			<div className="button-container">
				<input id="quantity-to-cart" type="number" min="1" max="30" />
				<button>Add To Cart</button>
			</div>

			<img src={product.image} alt={product.title} width="100px" height="auto" />
		</div>
	);
}

export { Product };
