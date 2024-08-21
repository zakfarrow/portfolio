"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex justify-between gap-4 lg:mx-[20%] sm:mx[10%]">
      <header className="sticky top-0 flex max-h-screen w-1/2 flex-col py-40 px-24 gap-y-2">
        <Hero />
        <Navbar />
      </header>
      <main className="pt-24 w-1/2 py-24 px-8">
        <AboutSection />
        <ContactSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Home;
