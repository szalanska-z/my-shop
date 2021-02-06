import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
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
                src={face}
                alt=""
              />
            </div>
            <div className="col-lg-6 text-center">
              <h3>Twarz</h3>
              <p>
                Każda cera potrzebuje dogłębnego oczyszczania, nawilżania i
                regeneracji. Polecamy naturalne kosmetyki do pielęgnacji twarzy
                z wyjątkowymi eco formułami. W naszej ofercie znajdziesz: kremy,
                eliksiry, serum, maski, żele do mycia. Bogate w aktywne
                składniki, jak: kwas hialuronowy, witaminy, roślinne ekstrakty,
                odżywcze oleje i masła.
              </p>
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
                src={body}
                alt=""
              />
            </div>
            <div className="col-lg-6 text-center order-lg-1 ">
              <h3>Ciało</h3>
              <p>
                Chcemy, aby codzienna pielęgnacja ciała stała się dla Ciebie
                rytuałem piękna. W naszej ofercie znajdziesz aromatyczne żele do
                kąpieli, pudry do kąpieli bogate w naturalne oleje roślinne,
                masła do ciała, peelingi solne i cukrowe, oleje do masażu, masła
                shea oraz kosmetyki do pielęgnacji dłoni i stóp.
              </p>
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
                src={hair}
                alt=""
              />
            </div>
            <div className="col-lg-6 text-center">
              <h3>Włosy</h3>
              <p>
                Oferujemy profesjonalne kosmetyki do pielęgnacji każdego rodzaju
                włosów: naturalne szampony, naturalne odżywki do włosów,
                peelingi do skóry głowy, maski regeneracyjne i odżywcze oraz
                jedwab do włosów. Bogate w odżywcze składniki aktywne, roslinne
                ekstrakty, witaminy, naturalne oleje, dzieki którym włosy będą
                zdrowe i lśniące.
              </p>
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
