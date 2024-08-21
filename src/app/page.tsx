"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex justify-between gap-4">
      <header className="sticky top-0 flex max-h-screen w-1/2 flex-col py-24">
        <Hero />
        <Navbar />
      </header>
      <main className="pt-24 w-1/2 py-24">
        <AboutSection />
        <ContactSection />
        <ProjectSection />
      </main>
    </div>
  );
};

export default Home;
