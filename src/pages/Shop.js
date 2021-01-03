import React, { useState, useEffect } from 'react';
import { cosmetics } from "../cosmetics"
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import Filters from "../components/Filters";

const Shop = (props) => {
	const [category, setCategory] = useState('');
	const [subCategory, setSubCategory] = useState('');
	const [filter, setFilter] = useState('');

	console.log(category, subCategory);

	return (
		<div className="container" id="shop">
			<div className="row">
				<div className="col-3">
					<Categories setCategory={(value) => setCategory(value)} setSubCategory={(value) => setSubCategory(value)}/>
				</div>
				<div className="col-9">
					<div className="filters-container">
						<Filters setFilter={(value) => setFilter(value)}/>
					</div>
					<div className="cosmetics-container">
						{cosmetics.map(cosmetic => (
							<ProductCard key={cosmetic.id} cosmetic={cosmetic} />
						))}
					</div>
				</div>
			</div>

		</div>
	);
}

export default Shop;