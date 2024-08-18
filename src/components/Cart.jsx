import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { ProductInCart } from "./ProductInCart";
import { v7 as uuidv7 } from "uuid";
import "../styles/productInCart.css";

function Cart() {
	const [productsInCart, setProductsInCart] = useOutletContext();
	const [amount, setAmount] = useState(0);
	const [buttonClicked, setButtonClicked] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		//console.log(productsInCart);

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

	useEffect(() => {
		//console.log(location.pathname);

		if (location.pathname === "/shop/cart/" || location.pathname === "/shop/cart") {
			setButtonClicked(false);
		} else if (location.pathname === "/shop/cart/payout" || location.pathname === "/shop/cart/payout/") {
			setButtonClicked(true);
		}
	}, [location]);

	function navigateToPayment() {
		navigate("./payout");
		setButtonClicked(true);
	}

	function navigateToCart() {
		setButtonClicked(false);
		navigate("./");
	}

	window.onload = () => {
		console.log(location.pathname);
		if (location.pathname === "/shop/cart/payout" || location.pathname === "/shop/cart/payout/") {
			navigateToCart();
		}
	};

	return (
		<section className="cart">
			<h3>Here&apos;s your Cart</h3>

			<div className="max-width">
				<div className="products-in-cart-container">
					{!Array.isArray(productsInCart) || productsInCart.length === 0 ? (
						<p className="text-centered">Nothing here yet!</p>
					) : buttonClicked === false || location.pathname === "/shop/cart/" ? (
						<>
							{productsInCart.map((product) => {
								let randomKey = uuidv7();

								return <ProductInCart product={product} key={randomKey} />;
							})}

							<div className="pay-now-container">
								<p data-testid="total-amount-in-cart">{Math.round(amount * 100) / 100} €</p>
								<button className="pay-now-button" onClick={navigateToPayment}>
									Pay Now!
								</button>
							</div>
						</>
					) : (
						<Outlet context={[amount, setAmount]} />
					)}
				</div>
			</div>
		</section>
	);
}

export { Cart };
