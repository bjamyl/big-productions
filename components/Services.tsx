"use client";
import React from "react";
import { Syne } from "next/font/google";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "./ui/button";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Services() {
  const services = [
    {
      title: "Music Production",
      description:
        "We record, mix and master your sound to take it to the next level",
      imgDir: "/recording.jpg",
    },
    {
      title: "Artiste Management",
      description:
        "We manage and nurture your career, secure deals and elevate your brand",
      imgDir: "/management.jpg",
    },
    {
      title: "Photography and Music video production",
      description:
        "Whether you are looking to produce your next banger music video or you are getting some shots for your promotional images, we have got you",
      imgDir: "/photography.jpg",
    },
  ];
  return (
    <section className="bg-[#1C1D1F]">
      <div className="mx-6 py-20 md:py-32 md:mx-16 xl:mx-64">
        <div>
          <p
            className={`text-white font-bold text-3xl md:text-4xl uppercase mb-10 md:mb-16 lg:text-5xl ${syne.className}`}
          >
            Our <br />
            Services<span className="text-blue-700">.</span>
          </p>
          <Swiper
            spaceBetween={30}
            loop={true}
            effect={"fade"}
            modules={[EffectFade, Navigation, Pagination]}
            navigation={true}
          >
            {services.map((service, i) => (
              <SwiperSlide>
                <ServiceCard
                  description={service.description}
                  imgDir={service.imgDir}
                  title={service.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-end mt-10">
          <Button className=" rounded-none text-white bg-transparent md:text-lg md:py-6 md:px-6" variant='outline'>GET IN TOUCH</Button>
        </div>
      </div>
    </section>
  );
}
