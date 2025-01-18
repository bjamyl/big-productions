import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  imgDir: string;
  description: string;
  title: string;
};

export default function ServiceCard({
  imgDir,
  description,
  title,
}: ServiceCardProps) {
  return (
    <div>
      <div className="relative h-[500px] xl:h-[700px]">
        <Image
          src={imgDir}
          width={1280}
          height={720}
          alt={title}
          className="brightness-50 w-full h-full object-cover"
        />
        <p className="uppercase absolute top-5 md:top-16 md:right-16 right-6 text-white font-bold text-xl md:text-2xl lg:text-3xl">
          {title}
        </p>
        <p className="text-white absolute bottom-10 left-10 max-w-[500px] md:text-lg">{description}</p>
      </div>
    </div>
  );
}
