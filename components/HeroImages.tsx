import React from "react";
import Image from "next/image";
import { Allura, Pacifico, Rouge_Script, Montserrat } from "next/font/google";

type SliderImageProps = {
  artist1: string;
  artist2: string;
  imgDir1: string;
  imgDir2: string;
  artist3: string;
  imgDir3: string;
  artist4: string;
  imgDir4: string;
};

const allura = Rouge_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function HeroImages({
  artist1,
  artist2,
  imgDir1,
  imgDir2,
  artist3,
  imgDir3,
  artist4,
  imgDir4,
}: SliderImageProps) {
  return (
    <div className="grid grid-cols-2 xl:h-screen border">
      <div className="relative border-4 border-red-600">
        <Image
          src={imgDir1}
          width={1280}
          height={720}
          alt={artist1}
          className="w-full h-full object-cover brightness-50"
        />
        <p
          className={`absolute text-white text-6xl md:text-8xl xl:text-[150px] bottom-8 right-6 md:bottom-10 md:right-10 ${allura.className}`}
        >
          <span className={`${montserrat.className} text-sm font-black`}>
            FEATURED ARTIST
          </span>{" "}
          <br />
          {artist1}
        </p>
      </div>
      <div className="relative">
        <Image
          src={imgDir2}
          width={1280}
          height={720}
          alt={artist2}
          className="w-full h-full object-cover brightness-50"
        />
        <p
          className={`absolute text-white text-6xl md:text-8xl xl:text-[150px] bottom-8 left-6 md:bottom-20 md:left-10 ${allura.className}`}
        >
          <span className={`${montserrat.className} text-sm font-black`}>
            FEATURED ARTIST
          </span>{" "}
          <br />
          {artist2}
        </p>
      </div>
      <div className="relative">
        <Image
          src={imgDir3}
          width={1280}
          height={720}
          alt={artist3}
          className="w-full h-full object-cover brightness-50"
        />
        <p
          className={`absolute text-white text-6xl md:text-8xl xl:text-[150px] bottom-8 right-6 md:bottom-10 md:right-10 ${allura.className}`}
        >
          <span className={`${montserrat.className} text-sm font-black`}>
            FEATURED ARTIST
          </span>{" "}
          <br />
          {artist3}
        </p>
      </div>
      <div className="relative">
        <Image
          src={imgDir4}
          width={1280}
          height={720}
          alt={artist4}
          className="w-full h-full object-cover brightness-50"
        />
        <p
          className={`absolute text-white text-6xl md:text-8xl xl:text-[150px] bottom-8 left-6 md:bottom-20 md:left-10 ${allura.className}`}
        >
          <span className={`${montserrat.className} text-sm font-black`}>
            FEATURED ARTIST
          </span>{" "}
          <br />
          {artist4}
        </p>
      </div>
    </div>
  );
}
