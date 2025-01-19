import React from "react";
import Image from "next/image";
import { Syne } from "next/font/google";
import { ContactForm } from "./ContactForm";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Contact() {
  return (
    <section>
      <div className="mx-6 py-5 md:py-10 xl:py-32 md:mx-16 2xl:mx-64">
        <div>
          <p
            className={`text-black font-bold text-3xl md:text-4xl uppercase mb-2 lg:text-5xl ${syne.className}`}
          >
            Contact Us
          </p>
          <p className=" mb-10 md:mb-16">
            Leave us a message. We will get back to you as quickly as possible
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10">
            <div className="">
              <Image
                src="/artists/davido.jpg"
                width={1280}
                height={720}
                alt="contact-image"
                className="h-full object-cover hidden md:block"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
