import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
	const [amountOfProductsInIconCart, setAmountOfProductsInIconCart] = useState(0);

	return (
		<>
			<header className="header-container">
				<h1>
					<Link to="/">Home</Link>
				</h1>
				<section className="header-shop">
					<h2>
						<Link to="shop">Shop</Link>
					</h2>

					<div className="header-cart-container">
						<Link to="shop/cart">
							{amountOfProductsInIconCart}
							&nbsp;
							<img id="cart-icon" src="/shop/cart.svg" alt="added in Cart" width="40px" height="auto" />
						</Link>
					</div>
				</section>
			</header>
			<Outlet context={[amountOfProductsInIconCart, setAmountOfProductsInIconCart]} />
		</>
	);
}

export { Header };
