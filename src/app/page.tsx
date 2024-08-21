"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React, { useRef } from "react";

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <button onClick={scrollToSection}>More</button>
      <div
        ref={sectionRef}
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1>Secton</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          tempora. Earum magni quis excepturi nisi. Excepturi, ab voluptatum
          itaque tenetur magnam soluta optio nemo id expedita dolorem
          accusantium, veritatis odio ldf.
        </p>
      </div>
    </div>
  );
};

export default Home;
