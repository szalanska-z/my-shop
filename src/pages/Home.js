import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
// import discount from '../images/discount-color.svg'
import photo4 from "../images/others/handmade.png";
import photo5 from "../images/others/natural.png";
import photo6 from "../images/others/vegan.png";
import photo7 from "../images/others/crueltyfree.png";
import photo8 from "../images/others/handmade3.png";
import photo9 from "../images/others/natural3.png";
import photo10 from "../images/others/vegan3.png";
import photo11 from "../images/others/crueltyfree3.png";
import hair from "../images/others/hair2.jpg";
import face from "../images/others/face3.jpg";
import body from "../images/others/cialo3.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="jumbotron-fluid pt-5 pb-2">
        <div className="container text-center">
          <h1 className="display-3">Eco Shop</h1>
          <p className="font-italic lead">Kosmetyki naturalne</p>
        </div>
        <div className="natural-images">
          <div className="natural-img">
            <img src={photo8} alt="" />
            <p className="natural-text">HAND MADE</p>
          </div>
          <div className="natural-img">
            <img src={photo9} alt="" />
            <p className="natural-text">NATURAL INGREDIENTS</p>
          </div>
          <div className="natural-img">
            <img src={photo10} alt="" />
            <p className="natural-text">FOR VEGAN</p>
          </div>
          <div className="natural-img">
            <img src={photo11} alt="" />
            <p className="natural-text">CRUELTY FREE</p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <Slider />
      </div>
      <section id="about" className="mt-0 mb-4">
        <div className="about_bg container-fluid">
          <div className="container py-3 py-lg-5">
            <div className="row">
              <div className="col">
                <h1 className="heading">O nas</h1>
                <p className="text-center font-italic">
                  Tworząc nasze kosmetyki naturalne zawsze kierujemy się troską
                  o dobro naszych klientów, ale i środowiska naturalnego.
                  Wierzymy, że moc składników płynących wprost z natury to
                  recepta na piękno i doskonałe samopoczucie . Wraz z naszymi
                  produktami przeniesiesz się w świat zniewalających aromatów,
                  unikalnych formuł i co najważniejsze – efektów, które naprawdę
                  widać.W ofercie Starej Mydlarni znajdziesz naturalne kosmetyki
                  przeznaczone do kompleksowej pielęgnacji – w tym kosmetyki do
                  kąpieli, ciała, twarzy i włosów. Stawiamy na prostotę, idącą w
                  parze z najwyższą jakością.
                </p>
                <div className="natural-images">
                  <img src={photo4} alt="" />
                  <img src={photo5} alt="" />
                  <img src={photo6} alt="" />
                  <img src={photo7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="my-5">
        <div className="container">
          <h1 className="heading">Oferta</h1>
          <div className="row d-flex justify-content-center align-items-center mb-5">
            <div className="col-lg-6 mb-3">
              <img
                className="img-fluid d-block mx-auto img_gallery"
                // src="https://nordicdesign.ca/wp-content/uploads/2017/03/meraki7.jpg"
                src={face}
                alt=""
              />
            </div>
            <div className="col-lg-6 text-center">
              <h3>Twarz</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae dolores reprehenderit aperiam dicta illo nostrum
                nesciunt repudiandae, vero omnis ut provident corrupti deleniti
                rem voluptatem officia, nulla debitis distinctio delectus.
              </p>
              {/* <button className="btn btn_gallery" data-toggle="modal" data-target="#modal-drawers">Zobacz produkty</button> */}
              <Link
                to={{
                  pathname: `/shop`,
                  state: { category: "face" },
                }}
              >
                <button className="btn btn_gallery">Zobacz produkty</button>
              </Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center mb-5">
            <div className="col-lg-6 order-lg-2 mb-3">
              <img
                className="img-fluid d-block mx-auto img_gallery"
                // src="https://nordicdesign.ca/wp-content/uploads/2017/03/meraki7.jpg"
                src={body}
                alt=""
              />
            </div>
            <div className="col-lg-6 text-center order-lg-1 ">
              <h3>Ciało</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, aliquid! Unde consectetur vero reiciendis eaque a
                explicabo! Aut itaque sunt praesentium, aperiam temporibus nisi
                eveniet aspernatur natus animi, eum minus.
              </p>
              {/* <button className="btn btn_gallery" data-toggle="modal" data-target="#modal-beds" >Zobacz produkty</button> */}
              <Link
                to={{
                  pathname: `/shop`,
                  state: { category: "body" },
                }}
              >
                <button className="btn btn_gallery">Zobacz produkty</button>
              </Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center mb-5">
            <div className="col-lg-6 mb-3">
              <img
                className="img-fluid d-block mx-auto img_gallery"
                // src="https://nordicdesign.ca/wp-content/uploads/2017/03/meraki7.jpg"
                src={hair}
                alt=""
              />
            </div>
            <div className="col-lg-6 text-center">
              <h3>Włosy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae dolores reprehenderit aperiam dicta illo nostrum
                nesciunt repudiandae, vero omnis ut provident corrupti deleniti
                rem voluptatem officia, nulla debitis distinctio delectus.
              </p>
              {/* <button className="btn btn_gallery" data-toggle="modal" data-target="#modal-chairs">Zobacz produkty</button> */}
              <Link
                to={{
                  pathname: `/shop`,
                  state: { category: "hair" },
                }}
              >
                <button className="btn  btn_gallery">Zobacz produkty</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
