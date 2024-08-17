import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/payout.css";

function Payout() {
	const [amount, setAmount] = useOutletContext();

	return (
		<section>
			{amount === 0 ? (
				<p>Add something to the Cart before going to the Payment Section!</p>
			) : (
				<div>
					<h4>Total Final Price: {Math.round(amount * 100) / 100} €</h4>

					<div className="payout-container">
						<p>You can pay with</p>

						<div className="google-pay-container">
							<h5>Google Pay</h5>

							<button className="google-pay-button">
								<img src="/shop/payout/googlePay.svg" alt="Pay now with Google Pay" width="90px" height="auto" />
							</button>
						</div>

						<div className="credit-container">
							<h5>your Credit Card</h5>

							<div className="companies-container">
								<img src="/shop/payout/visa.svg" alt="You can pay with your Visa Card" width="70px" height="auto" />
								<img
									src="/shop/payout/mastercard.svg"
									alt="You can pay with your Mastercard Card"
									width="70px"
									height="auto"
								/>
							</div>

							<form className="credit-form">
								<label htmlFor="credit-name">Name and surname *</label>
								<input type="text" id="credit-name" name="credit-name" required />
								<label htmlFor="credit-number">Card Number *</label>
								<input type="text" id="credit-number" name="credit-number" required />
								<label htmlFor="credit-cvv">Security code / CVV *</label>
								<input type="text" id="credit-cvv" name="credit-cvv" required />
								<label htmlFor="credit-expiry">Expiry date *</label>
								<input type="text" id="credit-expiry" name="credit-expiry" required />

								<button className="credit-pay-button">Pay</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export { Payout };
