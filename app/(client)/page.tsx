import About from "@/components/About";
import ArtistWall from "@/components/ArtistWall";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <About />
      <Services />
      <ArtistWall />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
