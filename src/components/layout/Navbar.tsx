"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const navLinks: string[] = ["SOLUTIONS", "RESOURCES", "ABOUT US"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-auto mt-4 flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 bg-[#050816]/70 px-6 py-2 backdrop-blur-xl">
      {/* LOGO */}
      <Link href="/" className="text-2xl font-semibold tracking-wide">
        N7
      </Link>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center gap-5 lg:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase().replace(" ", "-")}`}
            className="text-xs sm:text-sm font-medium tracking-wide text-white/60 transition hover:text-white"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <Button className="max-h-8 border-radius-white" variant="secondary">
          Contact Us
        </Button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex lg:hidden"
        aria-label="Open menu"
      >
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

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute left-0 top-full mt-3 w-full rounded-xl border border-white/10 bg-[#2F2F2FB2] backdrop-blur-xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="text-white/70 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            ))}

            <Button variant="secondary" className="mt-4">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
