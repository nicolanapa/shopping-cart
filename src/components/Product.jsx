import React from "react";
import "../styles/product.css";

function Product({ product }) {
	let amountOfStars = Math.floor(product.rating.rate);
	let renderedStars = [];

	for (let i = 0; i < amountOfStars; i++) {
		renderedStars.push(<img src="./starFull.svg" alt="Full Star" width="20px" height="auto" />);
	}

	if (product.rating.rate - amountOfStars > 0) {
		amountOfStars += 0.5;
	} else {
	}

	return (
		<div className="product-container">
			<p className="category">{product.category}</p>
			{/*Stars and rating count*/}

			<div className="rating-container">
				{}
				<p>{product.rating.count}</p>
			</div>

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
