"use client";

import TimelineAbout from "@/components/About/about";
import ParticlesComponent from "../components/Design_back/design";
import Home1 from "@/components/Home/home";


export default function Home() {
  return (
    <div className="relative">
      <ParticlesComponent />
      <Home1 />
      <TimelineAbout/>
      
    </div>
  );
}


