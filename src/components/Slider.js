import React from 'react';
import '../styles/Slider.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
// import slider1 from '../images/sliders/slide1.jpg'
// import slider2 from '../images/sliders/slide2.jpg'
import slider3 from '../images/sliders/slider3.jpg'
import slider4 from '../images/sliders/slider4.png'

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = (props) => {
	return (
		<div id="slider" className="slider">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				// navigation
				pagination={{ clickable: true }}>
				<SwiperSlide>
					<img src={slider4} alt=""/>
				</SwiperSlide>
				<SwiperSlide>
				<img src={slider4} alt=""/>
				</SwiperSlide>
				<SwiperSlide>
				<img src={slider4} alt=""/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Slider;