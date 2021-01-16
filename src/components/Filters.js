import React from 'react';


const Filters = (props) => {
	return (
		<div id="filters" className="filters">
			<div className="filters-sort">
				<span>Sortuj</span>
				<div className="btn-group">
					<button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> wybierz
  				</button>
					<div className="dropdown-menu">
						<li className="dropdown-item" onClick={() => props.setFilter("asc")}>cena rosnąco</li>
						<li className="dropdown-item" onClick={() => props.setFilter("desc")}>cena malejąco</li>
  				</div>
				</div>
			</div>
		</div>
	);
}

export default Filters;