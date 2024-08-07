import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1>
				<Link to="/">Home</Link>
			</h1>
			<h2>
				<Link to="shop">Shop</Link>
			</h2>
		</header>
	);
}

export { Header };
