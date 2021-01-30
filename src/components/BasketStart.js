import React from 'react';

const BasketStart = () => {
	const oldProducts = JSON.parse(localStorage.getItem('products')) || [];
	console.log(oldProducts);
	return (
		<div className="basket-container">
			{oldProducts.map((product,index) => {
				return (
					<div className="basket-product" key={index}>
						<span>{product.cosmetic.name}</span>
						<span>{product.amount}</span>
					</div>
				)
			})}
		</div>
	);
}

export default BasketStart;