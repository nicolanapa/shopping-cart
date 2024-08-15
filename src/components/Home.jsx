import React from "react";

function Home() {
	return (
		<main>
			<h2 data-testid="title" className="title center hided">
				Home
			</h2>
			<div className="grid-home-container">
				<section className="information-container rose-color">
					<img src="./launched.svg" alt="Launch" width="40px" height="auto" />
					<h3>Launched in 2024</h3>
					<p>15 Products are available</p>
				</section>

				<section className="information-container green-color">
					<h3>Collector&apos;s Edition coming soon</h3>
					<p>Yes, that&apos;s right!</p>
					<img src="./collectorsEdition.svg" alt="Collector's Edition Preview" width="40px" height="auto" />
				</section>

				<section className="information-container green-color">
					<h3>Update 2.0 is coming soon...</h3>
					<p>Lots of New Features!</p>
					<img src="./update2.svg" alt="Update" width="40px" height="auto" />
				</section>

				<section className="information-container rose-color">
					<img src="./roadmap.svg" alt="Roadmap" width="40px" height="auto" />
					<h3>Roadmap to be announced in 2025</h3>
					<p>It will be interesting</p>
				</section>
			</div>
		</main>
	);
}

export { Home };
