import React, { useState } from "react";
import "../styles/product.css";
import { v7 as uuidv7 } from "uuid";
function Product({ product, cart = "" }) {
	const [amountOfProduct, setAmountOfProduct] = useState(0);
	const [amountOfProductsInCart, setamountOfProductsInCart] = cart;

	function addOne() {
		if (amountOfProduct < 30) {
			setAmountOfProduct(amountOfProduct + 1);
		}
	}

	function removeOne() {
		if (amountOfProduct > 0) {
			setAmountOfProduct(amountOfProduct - 1);
		}
	}

	function addToCart(e) {
		e.preventDefault();

		setamountOfProductsInCart(amountOfProductsInCart + amountOfProduct);

		setAmountOfProduct(0);
	}

	let amountOfStars = Math.floor(product.rating.rate);
	let renderedStars = [];

	for (let i = 0; i < amountOfStars; i++) {
		let randomKey = uuidv7();
		renderedStars.push(<img src="./starFull.svg" alt="Full Star" width="20px" height="auto" key={randomKey} />);
	}

	if (product.rating.rate - amountOfStars > 0) {
		amountOfStars += 0.5;

		let randomKey = uuidv7();

		renderedStars.push(<img src="./starHalf.svg" alt="Half Star" width="20px" height="auto" key={randomKey} />);
	}

	return (
		<div className="product-container">
			<p className="category">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>

			<div className="rating-container">
				{renderedStars}

				<p>{product.rating.count} ratings</p>
			</div>

			<h3 className="product-title">{product.title}</h3>
			<p className="product-description">{product.description}</p>

			<div className="cart-and-image-container">
				<h4>{product.price} €</h4>

				<form className="button-container" onSubmit={addToCart}>
					<div className="update-quantity-container">
						<input id="quantity-to-cart" type="text" value={amountOfProduct} min="1" max="30" readOnly />

						<button type="button" onClick={addOne}>
							Add
						</button>

						<button type="button" onClick={removeOne}>
							Remove
						</button>
					</div>

					<button className="add-to-cart">Add To Cart</button>
				</form>

				<img className="product-image" src={product.image} alt={product.title} width="150px" height="auto" />
			</div>
		</div>
	);
}

export { Product };
