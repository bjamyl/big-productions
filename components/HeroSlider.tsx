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
import HeroImages from "./HeroImages";

export default function HeroSlider() {
  const artists = [
    { artist: "Tems", imgDir: "/artists/tems.jpg" },
    { artist2: "Wizkid", imgDir2: "/artists/wizkid.jpg" },
  ];

  const seondArtists = [
    { artist: "Omah Lay", imgDir: "/artists/omah.jpg" },
    { artist: "StoneBwoy", imgDir: "/artists/stonebwoy.jpg" },
    { artist: "Davido", imgDir: "/artists/davido.jpg" },
  ];

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
      {/* <div className="hidden xl:block">
        <HeroImages
          artist1="Tems"
          artist2="Wizkid"
          artist3="Omah Lay"
          artist4="Stonebwoy"
          imgDir1="/artists/tems.jpg"
          imgDir2="/artists/wizkid.jpg"
          imgDir3="/artists/omah.jpg"
          imgDir4="/artists/stonebwoy.jpg"
        />
      </div> */}
    </>
  );
}
