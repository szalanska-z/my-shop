import React from "react";
import "../styles/Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import slider5 from "../images/sliders/slider5.jpg";
import slider6 from "../images/sliders/slider6.jpg";
import slider7 from "../images/sliders/slider7.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = (props) => {
  return (
    <div id="slider" className="slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p>
            Tworząc nasze kosmetyki naturalne zawsze kierujemy się troską o
            dobro naszych klientów, ale i środowiska naturalnego. Wierzymy, że
            moc składników płynących wprost z natury to recepta na piękno i
            doskonałe samopoczucie .
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
          <p>
            Wraz z naszymi produktami przeniesiesz się w świat zniewalających
            aromatów, unikalnych formuł i co najważniejsze – efektów, które
            naprawdę widać.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" />
          <p>
            Przekonaj się, jak wiele piękna drzemie w naturze i wypróbuj nasze
            naturalne kosmetyki już dziś. Stale zmieniamy się dla ciebie – abyś
            mógł czerpać jeszcze więcej radości z używania w pełni
            ekologicznych, przyjaznych tobie i środowisku produktów.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
