import React from 'react';

const Product = (props) => {
	let cosmetic = props.location.state.cosmetic;

	let oldProducts = JSON.parse(localStorage.getItem('products')) || [];

	const addProduct = () => {
		const productInput = document.getElementById('product-input').value;
		if (productInput === "") {
			alert('Podaj ilość produktu');
		} else {
			console.log(oldProducts.findIndex(product => product.cosmetic.id === cosmetic.id));
			let productIndex = oldProducts.findIndex(product => product.cosmetic.id === cosmetic.id)
			if (productIndex !== -1) {
				oldProducts[productIndex].amount = Number(oldProducts[productIndex].amount) + Number(productInput)
				window.localStorage.setItem('products', JSON.stringify(oldProducts));
			} else {
				let newProduct = {
					amount: Number(productInput),
					cosmetic: cosmetic
				}
				oldProducts.push(newProduct)
				window.localStorage.setItem('products', JSON.stringify(oldProducts));
			}
		}
	}


	return (
		<div className="container" id="product">
			<div className="row product-container">
				<div className="col-5">
					<img src={cosmetic.image.default} alt="" />
				</div>
				<div className="col-7">
					<h2>{cosmetic.title}</h2>
					<p>{cosmetic.description}</p>
					<p>{cosmetic.capacity}</p>
					<p>{cosmetic.price}</p>
					<div className="add-product">
						<input type="number" id="product-input" />
						<button onClick={addProduct}>Do koszyka</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;