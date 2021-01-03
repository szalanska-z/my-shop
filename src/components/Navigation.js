import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
			<NavLink to="/" className="navbar-brand">
				<img src="img/logo.png" className="logo" alt=""/>
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink to="/" activeClassName="selected">Strona główna</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/shop">Sklep</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/basket">Koszyk</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contact">Kontakt</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;