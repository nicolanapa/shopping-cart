import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
	const [productsInCart, setProductsInCart] = useState(0);

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
					<Link to="shop/cart">
						{productsInCart}
						<img id="cart-icon" src="./cart.svg" alt="Cart" width="40px" height="auto" />
					</Link>
				</section>
			</header>
			<Outlet context={[productsInCart, setProductsInCart]} />
		</>
	);
}

export { Header };
