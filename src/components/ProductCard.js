import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({cosmetic}) => {
	return (
		<div className="cosmetic-item">
			<Link to={{
				pathname: `/product/${cosmetic.id}`,
				state: { cosmetic },
			}}>
				<img className="cosmetic-item--img" src={cosmetic.image.default} alt="" />
			</Link>
			<Link to={{
				pathname: `/product/${cosmetic.id}`,
				state: { cosmetic },
			}}>
				<h2 className="cosmetic-item--title">{cosmetic.title}</h2>
			</Link>
			<p className="cosmetic-item--capacity">{cosmetic.capacity}</p>
			<p className="cosmetic-item--price">{cosmetic.price}zł</p>
		</div>
	);
}

export default ProductCard;