import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Payout() {
	const [amount, setAmount] = useOutletContext();

	return (
		<section>
			<p>Test Payment -&gt; {amount} €</p>
		</section>
	);
}

export { Payout };
