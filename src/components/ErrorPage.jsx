import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div>
			<h2>404, Page not found</h2>
			<p>
				Are you looking for the <Link to="/">Home Page</Link> or <Link to="shop">Shop Page</Link>?
			</p>
		</div>
	);
}

export { ErrorPage };
