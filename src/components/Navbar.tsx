import Link from "next/link";
const Navbar: React.FC = ({}) => {
  return (
    <nav className="flex flex-col items-end gap-y-4">
      <Link href="#about">About</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#project">Projects</Link>
    </nav>
  );
};

export default Navbar;
