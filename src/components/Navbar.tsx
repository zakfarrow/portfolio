"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActive(hash.substring(1));
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top - 160 <= 0 && rect.bottom - 160 >= 0) {
          currentSectionId = section.id;
        }
      });
      setActive(currentSectionId);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="my-auto hidden flex-col items-end gap-y-4 sm:flex">
      <Link
        href="#about"
        className={`hover-underline-animation w-fit ${active === "about" ? "active-underline" : ""}`}
        onClick={() => setActive("about")}
      >
        About
      </Link>
      <Link
        href="#projects"
        className={`hover-underline-animation w-fit ${active === "projects" ? "active-underline" : ""}`}
        onClick={() => setActive("projects")}
      >
        Projects
      </Link>
      <Link
        href="#contact"
        className={`hover-underline-animation w-fit ${active === "contact" ? "active-underline" : ""}`}
        onClick={() => setActive("contact")}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
