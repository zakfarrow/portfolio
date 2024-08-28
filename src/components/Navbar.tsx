import { link } from "fs";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
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
    <nav className="flex flex-col items-end gap-y-4">
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
