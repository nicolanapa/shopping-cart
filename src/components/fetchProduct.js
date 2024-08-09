async function fetchProduct(quantity = "?limit=15", specificProduct = "") {
	let query;

	if (quantity === "?limit=15") {
		query = await fetch("https://fakestoreapi.com/products" + quantity);
		query = await query.json();
	} else if (quantity === Number) {
		query = await fetch("https://fakestoreapi.com/products?limit=" + quantity);
		query = await query.json();
	} else if (quantity === "" && specificProduct !== "") {
		query = await fetch("https://fakestoreapi.com/products/" + specificProduct);
		query = await query.json();
	}

	return query;
}

export { fetchProduct };
