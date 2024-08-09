import React from "react";

function Home() {
	return (
		<main>
			<h2>Home</h2>
			<div className="grid-home-container">
				<section className="information-container rose-color">
					<h3>Launched in 2024</h3>
					<p>15 Products are available</p>
				</section>
				<section className="information-container green-color">
					<h3>Collectors Edition coming soon</h3>
					<p>Yes, that&apos;s right!</p>
				</section>
			</div>
		</main>
	);
}

export { Home };
