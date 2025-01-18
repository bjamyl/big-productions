import React from "react";
import Image from "next/image";
import { Allura, Pacifico, Rouge_Script, Montserrat } from "next/font/google";

type SliderImageProps = {
  artist1: string;
  artist2: string;
  imgDir1: string;
  imgDir2: string;
};

const allura = Rouge_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function SliderImage({
  artist1,
  artist2,
  imgDir1,
  imgDir2,
}: SliderImageProps) {
  return (
    <div className="flex flex-col h-[60vh] md:h-[85vh] xl:h-screen xl:flex-row">
      <div className="relative h-1/2 xl:w-1/2 xl:h-full ">
        <Image
          src={imgDir1}
          width={1280}
          height={720}
          alt={artist1}
          className="w-full h-full object-cover brightness-50"
        />
        <p
          className={`absolute text-white text-6xl md:text-8xl xl:text-[150px] bottom-8 right-6 md:bottom-10 md:right-10 xl:bottom-20 xl:left-20 ${allura.className}`}
        >
          <span className={`${montserrat.className} text-sm font-black`}>
            FEATURED ARTIST
          </span>{" "}
          <br />
          {artist1}
        </p>
      </div>
      <div className="relative h-1/2 xl:w-1/2 xl:h-full">
        <Image
          src={imgDir2}
          width={1280}
          height={720}
          alt={artist2}
          className="w-full h-full object-cover brightness-50"
        />
        <p
          className={`absolute text-white text-6xl md:text-8xl xl:text-[150px] bottom-8 left-6 md:bottom-20 md:left-10 xl:bottom-20 xl:right-20 ${allura.className}`}
        >
          <span className={`${montserrat.className} text-sm font-black`}>
            FEATURED ARTIST
          </span>{" "}
          <br />
          {artist2}
        </p>
      </div>
    </div>
  );
}
