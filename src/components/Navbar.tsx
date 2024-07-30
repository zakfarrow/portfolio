import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex justify-center text-slate-400 px-10 py-8 bg-slate-800">
            <ul className="flex flex-row gap-x-20">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/resume">Resume</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    )
}