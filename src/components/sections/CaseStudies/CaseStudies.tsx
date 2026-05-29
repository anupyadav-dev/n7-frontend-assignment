"use client";

import { useRef } from "react";
import Link from "next/link";

import CaseStudyCard from "./CaseStudyCard";
import { caseStudies } from "./caseStudiesData";

const ArrowButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "left" ? "Previous case study" : "Next case study"}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3B82F6]/60 text-[#3B82F6] transition hover:bg-[#3B82F6] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
  >
    <span aria-hidden>{direction === "left" ? "←" : "→"}</span>
  </button>
);

export default function CaseStudies() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[#050816] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Our Case Studies
        </h2>

        {/* Scroll-snap carousel */}
        <div
          ref={scrollerRef}
          className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[5%] pb-6"
        >
          {caseStudies.map((s) => (
            <CaseStudyCard key={s.id} study={s} />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ArrowButton direction="left" onClick={() => scrollBy(-1)} />
            <ArrowButton direction="right" onClick={() => scrollBy(1)} />
          </div>

          <Link
            href="#"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] underline-offset-8 hover:underline"
          >
            View All
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
