"use client";
import React from "react";
import { Syne, Prompt, Open_Sans, Poppins, Raleway } from "next/font/google";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const prompt = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  const text =
    "Big Production, a professional music firm where creativity meets excellence! We are your ultimate destination for artiste management, music production and engineering. Our state-of-the-art studios are more than just facilities; they are vibrant spaces where every gig is executed flawlessly.";
  const text2 =
    "From producing chart-topping tracks to creating stunning music videos, we handle it all with precision and style. Our teams also excel in photo shoots and cover art design, ensuring your visual presence is as striking as your sound.";
  const [lettersRef, setLettersRef] = useArrayRef();
  const animateTimeline = useRef<gsap.core.Timeline | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  function useArrayRef() {
    const lettersRef = useRef<(HTMLDivElement | null)[]>([]);
    lettersRef.current = [];
    const setLettersRef = (ref: HTMLDivElement | null) => {
      if (ref) {
        lettersRef.current.push(ref);
      }
    };
    return [lettersRef, setLettersRef] as const;
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(lettersRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 30%",
          end: "bottom 80%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 xl:py-32 md:py-20  px-6 md:px-16 2xl:px-64 bg-slate-50">
      <div className="md:flex md:gap-10">
        <p
          className={`text-black font-bold text-3xl md:text-4xl uppercase mb-2 lg:text-5xl ${syne.className}`}
        >
          Who <br /> We <br /> Are <span className="text-blue-700">.</span>
        </p>
        <div ref={triggerRef} className="">
          <div className="">
            <p
              className={`${prompt.className} text-2xl text-slate-700 md:text-3xl font-bold  xl:text-5xl`}
            >
              {text.split("").map((letter, index) => (
                <span key={index} ref={setLettersRef}>
                  {letter}
                </span>
              ))}
            </p>
            <Image
              src="/studo.jpg"
              width={1280}
              height={720}
              alt="studio"
              className="mt-10 md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-10 xl:mt-20">
        <Marquee className="h-40">
          <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
            <span className="text-blue-700">*</span> Excellence{" "}
            <span className="text-blue-700">*</span>{" "}
          </p>
          <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
            <span className="text-blue-700">*</span> Creativity{" "}
            <span className="text-blue-700">*</span>{" "}
          </p>
          <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
            <span className="text-blue-700">*</span> Talent{" "}
            <span className="text-blue-700">*</span>{" "}
          </p>
          <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
            <span className="text-blue-700">*</span> Precision{" "}
            <span className="text-blue-700">*</span>{" "}
          </p>
        </Marquee>
      </div>
    </section>
  );
}
