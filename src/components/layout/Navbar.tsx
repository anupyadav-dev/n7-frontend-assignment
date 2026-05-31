"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

type NavLink = { label: string; href: string; hasCaret?: boolean };

const navLinks: NavLink[] = [
  { label: "Solutions", href: "#solutions", hasCaret: true },
  { label: "Resources", href: "#insights", hasCaret: true },
  { label: "About Us", href: "#about" },
];

const Caret = (
  <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when navigating
  const closeMenu = () => setOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 px-6 py-3 backdrop-blur-xl transition-colors duration-300 ${
          scrolled
            ? "bg-[#050816]/75 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
            : "bg-white/5"
        }`}
      >
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-semibold tracking-wide text-white"
        >
          N7
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href, hasCaret }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
              >
                {label}
                {hasCaret && Caret}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="secondary" size="sm">
            Request Demo
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile menu panel */}
        {open && (
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-white/10 bg-[#050816]/90 p-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="block text-sm font-medium uppercase tracking-[0.18em] text-white/75 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                variant="secondary"
                size="sm"
                onClick={closeMenu}
                className="w-full"
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
