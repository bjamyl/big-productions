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
  const artists = [
    { artist: "Tems", imgDir: "/artists/tems.jpg" },
    { artist: "Wizkid", imgDir: "/artists/wizkid.jpg" },
    { artist: "Omah Lay", imgDir: "/artists/omah.jpg" },
    { artist: "StoneBwoy", imgDir: "/artists/stonebwoy.jpg" },
    { artist: "Davido", imgDir: "/artists/davido.jpg" },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full"
      >
        {artists.map((artist, i) => (
          <SwiperSlide>
            <SliderImage artist={artist.artist} imgDir={artist.imgDir} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
