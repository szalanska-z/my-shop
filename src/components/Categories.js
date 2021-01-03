import React from 'react';


const Categories = (props) => {
	function changeCategory(value) {
		props.setCategory(value)
		props.setSubCategory("")
	}

	function changeSubCategory(value, subValue) {
		props.setCategory(value)
		props.setSubCategory(subValue)
	}

	return (
		<div id="categories" className="categories">
			<h2 className="categories--title">Kategorie</h2>
			<div className="categories-content">
				<div>
					<h3 onClick={() => changeCategory("face")}>Twarz</h3>
					<p onClick={() => changeSubCategory('face', 'face-wash')}>Żel do mycia twarzy</p>
					<p onClick={() => changeSubCategory('face', 'face-cream-day')}>Krem na dzień</p>
					<p onClick={() => changeSubCategory('face', 'face-cream-night')}>Krem na noc</p>
				</div>
				<div>
					<h3 onClick={() => changeCategory('hair')}>Włosy</h3>
					<p onClick={() => changeSubCategory('hair', 'hair-shampoo')}>Szampon do włosów</p>
					<p onClick={() => changeSubCategory('hair', 'hair-conditioner')}>Odżywka do włosów</p>
					<p onClick={() => changeSubCategory('hair', 'hair-mask')}>Maska do włosów</p>
				</div>
				<div>
					<h3 onClick={() => changeCategory('body')}>Ciało</h3>
					<p onClick={() => changeSubCategory('body', 'body-wash')}>Żel pod prysznic</p>
					<p onClick={() => changeSubCategory('body', 'body-peeling')}>Peeling</p>
					<p onClick={() => changeSubCategory('body', 'body-balm')}>Balsam do ciała</p>
				</div>
			</div>
		</div>
	);
}

export default Categories;