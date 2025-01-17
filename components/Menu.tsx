"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

type MenuProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu({ toggle, setToggle }: MenuProps) {
  const leftHalf = useRef<HTMLDivElement | null>(null);
  const rightHalf = useRef<HTMLDivElement | null>(null);
  const animateMenu = useRef<gsap.core.Timeline | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const linkedin = useRef<HTMLDivElement | null>(null);
  const twitter = useRef<HTMLDivElement | null>(null);
  const home = useRef<HTMLAnchorElement | null>(null);
  const about = useRef<HTMLAnchorElement | null>(null);
  const services = useRef<HTMLAnchorElement | null>(null);
  const studio = useRef<HTMLAnchorElement | null>(null);
  const contact = useRef<HTMLAnchorElement | null>(null);
  const bg = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Use GSAP's context to target refs safely
    const ctx = gsap.context(() => {
      animateMenu.current = gsap.timeline({
        paused: true,
      });

      // Add animations to the timeline
      animateMenu.current
        .from(bg.current, { autoAlpha: 0, opacity: 1, duration: 0.06 })
        .from(
          container.current,
          { autoAlpha: 0, opacity: 1, duration: 0.06 },
          "-=0.05"
        )
        .from(leftHalf.current, { autoAlpha: 0, y: -700, duration: 0.2 })
        .from(
          rightHalf.current,
          { autoAlpha: 0, y: 700, duration: 0.2 },
          "-=0.15"
        )
        .from(home.current, { autoAlpha: 0, x: -50, duration: 0.2 })
        .from(about.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1")
        .from(studio.current, { autoAlpha: 0, x: -50, duration: 0.2 }, "-=0.1")
        .from(
          services.current,
          { autoAlpha: 0, x: -50, duration: 0.2 },
          "-=0.1"
        )
        .from(
          contact.current,
          { autoAlpha: 0, x: -50, duration: 0.2 },
          "-=0.1"
        );
    });

    return () => ctx.revert(); // Clean up animations on unmount
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      toggle ? animateMenu.current?.play() : animateMenu.current?.reverse();
    });

    return () => ctx.revert();
  }, [toggle]);

  const links = [
    {
      id: 1,
      linkName: "LINKEDIN",
      address: "https://www.linkedin.com/in/jamil-banamwine-alhassan/",
      ref: linkedin,
    },
    {
      id: 2,
      linkName: "TWITTER",
      address: "https://twitter.com/MhylJay",
      ref: twitter,
    },
  ];
  const menuData = [
    {
      id: 1,
      linkName: "Home",
      address: "/",
      ref: home,
    },
    {
      id: 2,
      linkName: "Who We Are",
      address: "/projects",
      ref: about,
    },
    {
      id: 3,
      linkName: "Studio",
      address: "/studio",
      ref: studio,
    },
    {
      id: 4,
      linkName: "Services",
      address: "/services",
      ref: services,
    },
    {
      id: 5,
      linkName: "Contact",
      address: "/contact",
      ref: contact,
    },
  ];

  const path = usePathname();

  return (
    <section
      ref={container}
      className="h-screen w-screen fixed top-0 right-0 z-40"
    >
      <div ref={bg} className="invisible relative w-full h-full">
        <div
          ref={leftHalf}
          className="absolute top-0 bottom-0 h-full w-1/2 bg-[#1E43DA] z-30"
        ></div>
        <div
          ref={rightHalf}
          className="absolute right-0 h-full w-1/2 bg-[#1E43DA] z-30"
        ></div>
        <div className="absolute top-0 w-full h-full">
          <div className="grid xl:grid-cols-2 mt-32 mx-6">
            <div></div>
            <div className="flex flex-col gap-4 z-50  h-full">
              {menuData.map((menu) => (
                <Link ref={menu.ref} key={menu.id} href={menu.address}>
                  <p
                    className={`text-4xl uppercase font-bold md:text-5xl xl:text-7xl w-fit text-white z-50 transition-opacity duration-1000 ${
                      path === menu.address
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    {menu.linkName}
                  </p>
                </Link>
              ))}

              <div className="flex gap-4 mt-20">
                <p className="text-white font-bold flex text-xl">
                  X<ArrowUpRight size={20} />
                </p>
                <p className="text-white font-bold flex text-xl">
                  INSTAGRAM
                  <ArrowUpRight size={20} />
                </p>
                <p className="text-white font-bold flex text-xl">
                  YOUTUBE
                  <ArrowUpRight size={20} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
