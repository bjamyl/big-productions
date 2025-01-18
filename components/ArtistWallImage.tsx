import React from "react";
import Image from "next/image";

type ArtistWallImageProps = {
  img: string;
  name: string;
};

export default function ArtistWallImage({ img, name }: ArtistWallImageProps) {
  return (
    <div className="relative w-[350px] h-[500px]">
      <Image src={img} width={1280} height={720} alt={name} className=" brightness-50 object-cover h-full" />
      <p className="absolute bottom-5 left-4 text-white text-2xl font-bold">{name}</p>
    </div>
  );
}
