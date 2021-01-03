import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div id="footer" className="container-fluid" style={{ backgroundColor: '#2b3c68' }}>
			<div className="container">
				<div className="row">
					<div className="col-md-2 my-3 text-center">
						<img src="img/logo.png" className="logo logo_footer ml-2 rounded " alt="" />
					</div>
					<div className="col-md-5 my-3 text-center text-white">
						<h6 className=" text-uppercase mb-4">Kontakt:</h6>
						<p>ul.Grota Roweckiego 27</p>
						<p>35-302 Rzeszów</p>
						<p>+48 695 250 618</p>
					</div>
					<div className="col-md-5 my-3 text-center">
						<h6 className="text-white text-uppercase mb-4">Znajdziesz nas:</h6>
						<a href="http://instagram.com"><FontAwesomeIcon icon={faInstagramSquare} className="fab"/></a>
						<a href="http://facebook.com"
						><FontAwesomeIcon icon={faFacebookSquare} className="fab"/></a>
						<a href="http://twitter.com"><FontAwesomeIcon icon={faTwitterSquare} className="fab"/></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;