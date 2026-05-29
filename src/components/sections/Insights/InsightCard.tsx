import Link from "next/link";
import type { Insight } from "./insightsData";

const XGridIcon = (
  <svg
    aria-hidden
    viewBox="0 0 80 80"
    fill="none"
    className="h-16 w-16 text-[#3B82F6]"
  >
    {[
      [0, 0],
      [40, 0],
      [0, 40],
      [40, 40],
    ].map(([x, y], i) => (
      <g key={i}>
        <path
          d={`M${x + 8} ${y + 8}l24 24`}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d={`M${x + 32} ${y + 8}l-24 24`}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    ))}
  </svg>
);

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      {/* Thumbnail tile */}
      <div className="flex h-40 items-center justify-center rounded-xl bg-[#0B1538]">
        {XGridIcon}
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
          {insight.eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
          {insight.title}
        </h3>
        <p className="mt-3 text-xs text-white/55">
          <span className="text-white/70">{insight.author}</span>
          <span aria-hidden className="mx-2">
            ·
          </span>
          <span>{insight.date}</span>
        </p>
      </div>

      <Link
        href={insight.href}
        className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-6 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#050816] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
      >
        Read More
      </Link>
    </article>
  );
}
