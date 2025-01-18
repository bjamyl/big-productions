import About from "@/components/About";
import ArtistWall from "@/components/ArtistWall";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <About />
      <Services />
      <ArtistWall />
    </div>
  );
}
