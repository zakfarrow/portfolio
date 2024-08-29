import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import React from "react";
import FooterSection from "@/components/FooterSection";
import DocumentLink from "@/components/DocumentLink";

const Home = () => {
  return (
    <div className="mx-[8%] my-[8%] sm:flex sm:justify-between sm:gap-4 lg:mx-[5%] xl:mx-[10%]">
      <header className="flex max-h-screen w-full flex-col items-end gap-y-12 pb-16 pt-24 md:sticky md:top-0 md:w-1/2 md:py-40 lg:px-12 xl:px-32">
        <Hero />
        <Navbar />
        <DocumentLink />
      </header>
      <main className="w-full p-0 md:block md:w-1/2 md:px-8 md:py-40">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;
