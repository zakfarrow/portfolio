"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import React from "react";
import FooterSection from "@/components/FooterSection";

const Home: React.FC = () => {
  return (
    <div className="sm:mx[10%] flex justify-between gap-4 lg:mx-[15%]">
      <header className="sticky top-0 flex max-h-screen w-1/2 flex-col items-end gap-y-12 px-24 py-40">
        <Hero />
        <Navbar />
      </header>
      <main className="w-1/2 px-8 py-40">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;
