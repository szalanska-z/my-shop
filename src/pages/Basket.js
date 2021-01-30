import React, { useState, useEffect } from 'react';
import BasketStart from '../components/BasketStart';
import BasketStep1 from '../components/BasketStep1';
import BasketStep2 from '../components/BasketStep2';

const Basket = () => {
	const [step, setStep] = useState('0');

	return (
		<div className="container" id="basket">
			<div className="row">
				{step === "0" && <BasketStart />}
				{step === "1" && <BasketStep1 />}
				{step === "2" && <BasketStep2 />}
			</div>
		</div>
	);
}

export default Basket;