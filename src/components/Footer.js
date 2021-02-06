import React from "react";
import logo from "../images/logo.png";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div id="footer" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-2 my-3 text-center">
            <img src={logo} className="logo logo_footer ml-2 rounded " alt="" />
          </div>
          <div className="col-md-5 my-3 text-center text-white">
            <h6 className=" text-uppercase mb-4">Kontakt:</h6>
            <p>ul.Grota Roweckiego 27</p>
            <p>35-302 Rzeszów</p>
            <p>+48 695 250 618</p>
          </div>
          <div className="col-md-5 my-3 text-center">
            <h6 className="text-white text-uppercase mb-4">Znajdziesz nas:</h6>
            <a href="http://instagram.com">
              <i className="icon-instagram icon-social"></i>
            </a>
            <a href="http://facebook.com">
              <i className="icon-facebook icon-social"></i>
            </a>
            <a href="http://twitter.com">
              <i className="icon-twitter icon-social"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
