import React from "react";
import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  message: string;
  image: string;
  position: string;
};

export default function TestimonialCard({
  name,
  message,
  image,
  position,
}: TestimonialCardProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
      <div className="h-[500px]">
        <Image
          src={image}
          width={1280}
          height={720}
          alt={name}
          className="object-cover h-full "
        />
      </div>
      <div className="md:w-full bg-[#1C1D1F]">
        <p className="text-lg md:text-xl lg:text-2xl text-white">
          <span className="text-blue-700">"</span>
          {message}
          <span className="text-blue-700">"</span>
        </p>
        <p className="text-white text-lg font-bold mt-5">
          {name}, {position}
        </p>
      </div>
    </div>
  );
}
