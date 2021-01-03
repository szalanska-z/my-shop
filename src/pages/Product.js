import React from 'react';

const Product = (props) => {
	let cosmetic = props.location.state.cosmetic;
	console.log(cosmetic)
	return (
		<div className="container" id="product">
			<div className="row product-container">
				<div className="col-5">
					<img src={cosmetic.image.default} alt=""/>
				</div>
				<div className="col-7">
					<h2>{cosmetic.title}</h2>
					<p>{cosmetic.description}</p>
					<p>{cosmetic.capacity}</p>
					<p>{cosmetic.price}</p>
					<div className="add-product">
						<input type="number"/>
						<button>Do koszyka</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;