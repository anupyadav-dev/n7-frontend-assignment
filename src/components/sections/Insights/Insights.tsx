import Link from "next/link";

import InsightCard from "./InsightCard";
import { insights } from "./insightsData";

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[#050816] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left — heading + INSIGHTS button (sticky on desktop) */}
          <div className="flex flex-col lg:sticky lg:top-32 lg:self-start">
            <h2 className="max-w-sm text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Link
              href="#"
              className="mt-10 inline-flex h-12 w-fit items-center justify-center rounded-full border border-white/25 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#050816] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
            >
              Insights
            </Link>
          </div>

          {/* Right — card grid + read-all link */}
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {insights.map((i) => (
                <InsightCard key={i.id} insight={i} />
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] underline-offset-8 hover:underline"
              >
                Read All Insights
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
