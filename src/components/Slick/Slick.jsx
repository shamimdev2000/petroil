import React from 'react'
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Slick = () => {
    
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={25}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { 
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide><img src={sliderOne} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src={sliderTwo} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src={sliderThree} alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img src={sliderFour} alt="Slide 4" /></SwiperSlide>
      <SwiperSlide><img src={sliderThree} alt="Slide 5" /></SwiperSlide>
      <SwiperSlide><img src={sliderOne} alt="Slide 6" /></SwiperSlide>
      <SwiperSlide><img src={sliderFour} alt="Slide 7" /></SwiperSlide>
    </Swiper>
  );
};

export default Slick