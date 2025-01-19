import React from "react";
import { Syne, Raleway } from "next/font/google";
import Marquee from "react-fast-marquee";
import ArtistWallImage from "./ArtistWallImage";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function ArtistWall() {
  const artistes = [
    {
      name: "Tems",
      img: "/artists/tems.jpg",
    },
    {
      name: "Davido",
      img: "/artists/davido.jpg",
    },
    {
      name: "Stonebwoy",
      img: "/artists/stonebwoy.jpg",
    },
    {
      name: "Omah Lay",
      img: "/artists/omah.jpg",
    },
    {
      name: "Wizkid",
      img: "/artists/wizkid.jpg",
    },
  ];
  return (
    <section>
      <div className="mx-6 py-20 md:py-32 md:mx-16 2xl:mx-64">
        <div>
          <p
            className={`text-black font-bold text-3xl md:text-4xl uppercase mb-5 lg:text-5xl ${syne.className}`}
          >
            Artists <br />
            Wall<span className="text-blue-700">.</span>
          </p>
          <p className={`${raleway.className} text-slate-500`}>
            We have worked with a lot of artists; both upcoming and promiment.
            We don't just promise, we deliver
          </p>
          <div className="mt-10">
            <Marquee direction="left">
              {artistes.map((artist) => (
                <ArtistWallImage img={artist.img} name={artist.name} />
              ))}
            </Marquee>
            <Marquee className="h-40">
              <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
                <span className="text-blue-700">*</span> Shatta Wale{" "}
                <span className="text-blue-700">*</span>{" "}
              </p>
              <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
                <span className="text-blue-700">*</span> Ayra Starr{" "}
                <span className="text-blue-700">*</span>{" "}
              </p>
              <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
                <span className="text-blue-700">*</span> Sarkodie{" "}
                <span className="text-blue-700">*</span>{" "}
              </p>
              <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
                <span className="text-blue-700">*</span> Don Jazzy{" "}
                <span className="text-blue-700">*</span>{" "}
              </p>
            </Marquee>
            <Marquee direction="right">
              {artistes.map((artist) => (
                <ArtistWallImage img={artist.img} name={artist.name} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
