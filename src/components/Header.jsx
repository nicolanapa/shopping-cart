import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
	const [amountOfProductsInIconCart, setamountOfProductsInIconCart] = useState(0);

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
							<img id="cart-icon" src="/cart.svg" alt="Cart" width="40px" height="auto" />
						</Link>
					</div>
				</section>
			</header>
			<Outlet context={[amountOfProductsInIconCart, setamountOfProductsInIconCart]} />
		</>
	);
}

export { Header };
