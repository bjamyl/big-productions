"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import SliderImage from "./SliderImage";

export default function HeroSlider() {
  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={30}
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="w-full"
        >
          <SwiperSlide>
            <SliderImage
              artist1="Tems"
              imgDir1="/artists/tems.jpg"
              imgDir2="/artists/wizkid.jpg"
              artist2="Wizkid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage
              artist1="Omah Lay"
              imgDir1="/artists/omah.jpg"
              imgDir2="/artists/stonebwoy.jpg"
              artist2="Stonebwoy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
