import React from "react";
import Image from "next/image";
import { Allura, Pacifico } from "next/font/google";

type SliderImageProps = {
  artist: string;
  imgDir: string;
};

const allura = Pacifico({
    subsets: ['latin'],
    weight: ["400"],
  });
  

export default function SliderImage({ artist, imgDir }: SliderImageProps) {
  return (
    <div className="relative h-[60vh] md:h-[80vh] xl:h-[95vh]">
      <Image src={imgDir} width={1280} height={720} alt={artist}  className="w-full h-full abosolute top-0 left-0 bottom-0 right-0 object-cover"/>
      <p className={`text-6xl md:text-8xl absolute bottom-10 text-white backdrop-blur-md p-5 rounded-[20px] left-10 xl:text-[150px] ${allura.className}`}>{artist}</p>
    </div>
  );
}
