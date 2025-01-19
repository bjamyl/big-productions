"use client";
import React from "react";
import { Syne } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kwame Bediako",
      position: "Singer-songwriter",
      message:
        "Big Production transformed my music career. From the first meeting, I knew I was in the right hands. The team’s attention to detail in both production and marketing made my latest album a massive success. I can't thank them enough for the professionalism and creativity they brought to every session.",
      image: "/artists/davido.jpg",
    },
    {
      name: "Marcus Asante",
      position: " Music Producer",
      message:
        "Working with Big Production is always a seamless experience. Their state-of-the-art studios and expert engineers elevate every track to its highest potential. It’s a place where ideas come to life with precision and flair. They truly understand the art of music production.",
      image: "/artists/omah.jpg",
    },
    {
      name: "Jane Taylor",
      position: "Video Director",
      message:
        "Collaborating with Big Production on music videos is a dream. They handle everything from concept to final cut with such finesse that the end product always exceeds expectations. Their creative input and technical expertise are unmatched in the industry.",
      image: "/artists/tems.jpg",
    },
    {
      name: "Emmanuel Yaw",
      position: "Manager at Global Records",
      message:
        "Big Production is our go-to for artiste management and branding. Their strategic approach to playlisting and promotions has significantly boosted our artists’ visibility. They have a keen sense of the market and a genuine passion for helping artists succeed.",
      image: "/artists/stonebwoy.jpg",
    },
    {
      name: "Kevin Love",
      position: "Emerging Artist",
      message:
        "As an emerging artist, finding the right support is crucial, and Big Production provided just that. Their team made me feel like a priority, guiding me through every step from recording to marketing. Thanks to them, I’ve been able to build a solid fan base and grow my career.",
      image: "/artists/wizkid.jpg",
    },
  ];
  return (
    <section className="bg-[#1C1D1F]">
      <div className="mx-6 py-20 md:py-32 md:mx-16 2xl:mx-64">
        <div>
          <p
            className={`text-white font-bold text-3xl md:text-4xl uppercase mb-10 md:mb-16 lg:text-5xl ${syne.className}`}
          >
            Testimonials<span className="text-blue-700">.</span>
          </p>
          <Swiper
            spaceBetween={30}
            loop={true}
            effect={"fade"}
            modules={[ Navigation, Pagination]}
            navigation={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide>
                <TestimonialCard
                  image={testimonial.image}
                  message={testimonial.message}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
