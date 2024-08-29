"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const NavbarTop: React.FC = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActive(hash.substring(1));
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-20 flex justify-center gap-x-6 bg-white bg-opacity-10 py-4 backdrop-blur-md md:hidden">
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
      <div className="flex gap-x-2">
        <a href="/CV.pdf" target="_blank" className="mt-auto">
          CV
        </a>
        <ArrowUpRightIcon className="size-4" />
      </div>
    </nav>
  );
};

export default NavbarTop;
