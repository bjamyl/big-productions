import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Services() {
  return (
    <section className="bg-[#1C1D1F]">
      <div className="mx-6 py-20 md:py-32 md:mx-16 xl:mx-64">
        <div
          className={`flex flex-col items-end font-bold text-white text-3xl md:text-4xl lg:text-5xl pb-20 ${syne.className}`}
        >
          <p>
            <span className="text-blue-700">"</span>Dedicated to music
            <span className="text-blue-700">"</span>
          </p>
          <p>
            <span className="text-blue-700">"</span>Engineering Excellence
            <span className="text-blue-700">"</span>
          </p>
        </div>
        <div>
          <p
            className={`text-white font-bold text-3xl md:text-4xl uppercase mb-2 lg:text-5xl ${syne.className}`}
          >
            Our <br />
            Services<span className="text-blue-700">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
