import Link from "next/link";
import type { CaseStudy } from "./caseStudiesData";

const XGridLarge = (
  <svg
    aria-hidden
    viewBox="0 0 160 160"
    fill="none"
    className="h-32 w-32 text-[#3B82F6]"
  >
    {[
      [0, 0],
      [80, 0],
      [0, 80],
      [80, 80],
    ].map(([x, y], i) => (
      <g key={i}>
        <path
          d={`M${x + 16} ${y + 16}l48 48`}
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d={`M${x + 64} ${y + 16}l-48 48`}
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
    ))}
  </svg>
);

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full snap-center shrink-0 basis-[min(85%,820px)] gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      {/* Brand pattern panel */}
      <div className="hidden h-auto w-[280px] shrink-0 items-center justify-center rounded-xl bg-[#0B1538] p-6 sm:flex">
        {XGridLarge}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
          {study.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-snug text-white sm:text-3xl">
          {study.title}
        </h3>
        <p className="mt-4 text-sm font-medium text-white/70">{study.brand}</p>
        <Link
          href={study.href}
          className="mt-6 inline-flex h-12 w-fit items-center justify-center rounded-full border border-white/25 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#050816] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
