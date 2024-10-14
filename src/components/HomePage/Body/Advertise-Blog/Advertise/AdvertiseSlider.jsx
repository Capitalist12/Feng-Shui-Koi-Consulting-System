import React from "react";
import AdvertiseCardItem from "./AdvertiseCardItem.jsx";

//slick carousel library
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AdvertiseSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <AdvertiseCardItem/>
        <AdvertiseCardItem/>
        <AdvertiseCardItem/>
        <AdvertiseCardItem/>
        <AdvertiseCardItem/>
      </Slider>
    </div>
  );
}
