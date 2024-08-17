import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Payout() {
	const [amount, setAmount] = useOutletContext();

	return (
		<section>
			{amount === 0 ? (
				<p>Add something to the Cart before going to the Payment Section!</p>
			) : (
				<div>
					<p>Test Payment -&gt; {amount} €</p>
				</div>
			)}
		</section>
	);
}

export { Payout };
