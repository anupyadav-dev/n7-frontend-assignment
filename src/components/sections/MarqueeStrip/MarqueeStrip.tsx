import type { ReactNode } from "react";

const StarIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-slate-400">
    <path
      d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const items = (
  <>
    <li className="text-2xl font-semibold text-[#3B82F6]">N7</li>
    <li aria-hidden>{StarIcon}</li>
    <li className="text-2xl font-semibold text-slate-900">Say</li>
    <li aria-hidden className="text-2xl">
      👋
    </li>
    <li className="text-2xl font-semibold text-slate-900">
      to the new way of banking
    </li>
    <li aria-hidden>{StarIcon}</li>
    <li className="text-2xl font-semibold text-[#3B82F6]">CB7</li>
    <li aria-hidden>{StarIcon}</li>
  </>
);

function MarqueeRow({ children }: { children: ReactNode }) {
  return (
    <ul
      aria-hidden
      className="flex shrink-0 items-center gap-10 px-5 motion-safe:animate-[marquee_30s_linear_infinite]"
    >
      {children}
    </ul>
  );
}

export default function MarqueeStrip() {
  return (
    <section
      aria-label="N7 and CB7 — Say hi to the new way of banking"
      className="relative overflow-hidden bg-white py-6"
    >
      <span className="sr-only">
        N7 and CB7 — Say hi to the new way of banking
      </span>
      <div className="flex w-max">
        <MarqueeRow>{items}</MarqueeRow>
        <MarqueeRow>{items}</MarqueeRow>
      </div>
    </section>
  );
}
