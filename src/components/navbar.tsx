"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          Afnan.
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="hover:text-white transition"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/afnangit00"
            target="_blank"
            className="text-zinc-400 hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/afnan-lux-32397431b/"
            target="_blank"
            className="text-zinc-400 hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}