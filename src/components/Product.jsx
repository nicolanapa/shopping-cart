import React, { useState } from "react";
import "../styles/product.css";
import { v7 as uuidv7 } from "uuid";
function Product({ allProductsInCart = [], product, cart = "" }) {
	const [productsInCart, setProductsInCart] = allProductsInCart;
	const [localAmountOfProduct, setLocalAmountOfProduct] = useState(0);
	const [amountOfProductsInIconCart, setAmountOfProductsInIconCart] = cart;

	function changeAmountOfProductInCart(indexOfProductInCart) {
		let tempProductsInCart = productsInCart.slice(0);

		/*console.log(
			"TEMP AMOUNT",
			tempProductsInCart[indexOfProductInCart].amount,
			"LOCAL AMOUNT",
			localAmountOfProduct,
			"AMOUNT IN ICON CART",
			amountOfProductsInIconCart
		);*/

		tempProductsInCart[indexOfProductInCart].amount += localAmountOfProduct;

		setProductsInCart(tempProductsInCart);
	}

	function checkIfAlreadyAddedToCart(indexOfProductInCart) {
		if (indexOfProductInCart !== -1) {
			return true;
		} else {
			return false;
		}
	}

	function addOne() {
		if (localAmountOfProduct < 30) {
			setLocalAmountOfProduct(localAmountOfProduct + 1);
		}
	}

	function removeOne() {
		if (localAmountOfProduct > 0) {
			setLocalAmountOfProduct(localAmountOfProduct - 1);
		}
	}

	function addToCart(e) {
		e.preventDefault();

		if (localAmountOfProduct === 0) {
			return 0;
		}

		setAmountOfProductsInIconCart(amountOfProductsInIconCart + localAmountOfProduct);

		let indexOfProductInCart = productsInCart.findIndex((singleProductInCart) => singleProductInCart.id === product.id);

		if (checkIfAlreadyAddedToCart(indexOfProductInCart)) {
			changeAmountOfProductInCart(indexOfProductInCart);
			setLocalAmountOfProduct(0);

			return 0;
		} else {
			product.amount = localAmountOfProduct;

			if (productsInCart.length === 0) {
				setProductsInCart([product]);
			} else {
				let tempProductsInCart = productsInCart.slice(0);
				tempProductsInCart.push(product);

				setProductsInCart(tempProductsInCart);
			}

			setAmountOfProductsInIconCart(amountOfProductsInIconCart + localAmountOfProduct);
			setLocalAmountOfProduct(0);
		}
	}

	let amountOfStars = Math.floor(product.rating.rate);
	let renderedStars = [];

	for (let i = 0; i < amountOfStars; i++) {
		let randomKey = uuidv7();
		renderedStars.push(<img src="/shop/starFull.svg" alt="Full Star" width="20px" height="auto" key={randomKey} />);
	}

	if (product.rating.rate - amountOfStars > 0) {
		amountOfStars += 0.5;

		let randomKey = uuidv7();

		renderedStars.push(<img src="/shop/starHalf.svg" alt="Half Star" width="20px" height="auto" key={randomKey} />);
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
						<input
							id="quantity-to-cart"
							type="number"
							value={localAmountOfProduct}
							onChange={(event) => setLocalAmountOfProduct(Number(event.target.value))}
							min="1"
							max="30"
						/>

						<button type="button" onClick={addOne}>
							Add
						</button>

						<button type="button" onClick={removeOne}>
							Remove
						</button>
					</div>

					<button type="submit" className="add-to-cart">
						Add To Cart
					</button>
				</form>

				<img className="product-image" src={product.image} alt={product.title} width="150px" height="auto" />
			</div>
		</div>
	);
}

export { Product };
