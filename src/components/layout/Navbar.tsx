"use client";

import Image from "next/image";

const navLinks: string[] = ["SOLUTIONS", "RESOURCES", "ABOUT US"];

export default function Navbar() {
  return (
    <header className="pt-6">
      <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl">
        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">N7</h2>
        </div>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm font-medium tracking-wide text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <Image
          src="/buttons/navbar-request-demo-button.png"
          alt="Request Demo"
          width={180}
          height={60}
          className="h-auto w-40"
          loading="eager"
        />

        {/* MOBILE MENU */}
        <button className="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
