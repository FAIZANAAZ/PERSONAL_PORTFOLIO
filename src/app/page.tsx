"use client";
import Myskills from "@/components/Skills/myskil";
import ParticlesComponent from "../components/Design_back/design";
import Homee from "@/components/Home/home";

export default function Home() {
  return (
    <div className="relative">
      <ParticlesComponent />
      <Homee />
      <Myskills/>
    </div>
  );
}


