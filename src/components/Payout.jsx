import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/payout.css";
import "../styles/errorPage.css";

function Payout() {
	const [amount, setAmount] = useOutletContext();
	const [paying, setPaying] = useState("payment-waiting");

	function sendingPayment() {
		Math.floor(Math.random() * 2) === 1 ? setPaying("payment-completed") : setPaying("payment-error");
	}

	function ErrorPayment() {
		return (
			<div className="error-main">
				<section className="error-container">
					<h2>Couldn&apos;t process your Payment!</h2>
					<p>Please retry in 5 minutes</p>
				</section>
			</div>
		);
	}

	function CompletedPayment() {
		return (
			<div className="confermation-main">
				<section className="confermation-container">
					<h2>Processed your Payment!</h2>
					<p>We will send you shortly an Email</p>
					<p>Also, check your Spam folder!</p>
				</section>
			</div>
		);
	}

	return (
		<section>
			{amount === 0 ? (
				<p>Add something to the Cart before going to the Payment Section!</p>
			) : paying === "payment-waiting" ? (
				<div>
					<h4>Total Final Price: {Math.round(amount * 100) / 100} €</h4>

					<div className="payout-container">
						<p className="left-spacing">You can pay with</p>

						<div className="google-pay-container">
							<h5>Google Pay</h5>

							<button className="google-pay-button" onClick={sendingPayment}>
								<img src="/shop/payout/googlePay.svg" alt="Pay now with Google Pay" width="90px" height="auto" />
							</button>
						</div>

						<div className="credit-container">
							<h5>or your Credit Card</h5>

							<div className="companies-container">
								<img src="/shop/payout/visa.svg" alt="You can pay with your Visa Card" width="70px" height="auto" />
								<img
									src="/shop/payout/mastercard.svg"
									alt="You can pay with your Mastercard Card"
									width="70px"
									height="auto"
								/>
							</div>

							<form className="credit-form" onSubmit={sendingPayment}>
								<label htmlFor="credit-name">Name and surname *</label>
								<input type="text" id="credit-name" name="credit-name" placeholder="Marco Rigato" required />
								<label htmlFor="credit-number">Card Number *</label>
								<input type="text" id="credit-number" name="credit-number" placeholder="1234-5678-8910" required />
								<label htmlFor="credit-cvv">Security code / CVV *</label>
								<input type="text" id="credit-cvv" name="credit-cvv" placeholder="123" required />
								<label htmlFor="credit-expiry">Expiry date *</label>
								<input type="text" id="credit-expiry" name="credit-expiry" placeholder="04/26" required />

								<button className="credit-pay-button">Pay</button>
							</form>
						</div>
					</div>
				</div>
			) : paying === "payment-completed" ? (
				<CompletedPayment />
			) : (
				<ErrorPayment />
			)}
		</section>
	);
}

export { Payout };
