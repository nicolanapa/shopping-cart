import React from "react";
import { Link } from "react-router-dom";
import "../styles/errorPage.css";

function ErrorPage() {
	return (
		<main className="error-main">
			<section className="error-container">
				<h2>404, Page not found</h2>
				<p>
					Are you looking for the <Link to="/">Home Page</Link> or the <Link to="shop">Shop Page</Link>?
				</p>
			</section>
		</main>
	);
}

export { ErrorPage };
