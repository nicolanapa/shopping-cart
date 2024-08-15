import React, { useEffect, useState } from "react";
import { v7 as uuidv7 } from "uuid";

function ProductInCart({ product }) {
	const [processedCategoryImage, setProcessedCategoryImage] = useState();

	useEffect(() => {
		let firstUppedCategoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);

		if (firstUppedCategoryName === "Men's clothing") {
			setProcessedCategoryImage(
				<img
					className="cart-category-image"
					src={"/shop/categories/clothing.svg"}
					alt={firstUppedCategoryName}
					width="25px"
					height="auto"
				/>
			);
		} else if (firstUppedCategoryName === "Women's clothing") {
			setProcessedCategoryImage(
				<img
					className="cart-category-image"
					src={"/shop/categories/clothing.svg"}
					alt={firstUppedCategoryName}
					width="25px"
					height="auto"
				/>
			);
		} else {
			setProcessedCategoryImage(
				<img
					className="cart-category-image"
					src={"/shop/categories/" + product.category + ".svg"}
					alt={firstUppedCategoryName}
					width="25px"
					height="auto"
				/>
			);
		}
	}, [product]);

	return (
		<div data-testid="product-in-cart" className="product-in-cart-container">
			<h4>
				{processedCategoryImage}
				&nbsp;
				{product.title}
			</h4>

			<div className="amount-container">
				<p data-testid="amount-of-product">{product.amount}</p>
				<p>x</p>
				<h5>{product.price} €</h5>
			</div>
		</div>
	);
}

export { ProductInCart };
