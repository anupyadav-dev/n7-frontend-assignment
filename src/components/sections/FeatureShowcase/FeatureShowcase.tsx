"use client";

import Image from "next/image";

import Button from "@/components/ui/Button";
import LearnMoreLink from "@/components/ui/LearnMoreLink";

export default function FeatureShowcase() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* MAIN CONTAINER */}
        <div className="relative rounded-[32px] border border-white/10 bg-[rgba(255,255,255,0.02)] px-6 py-16 lg:px-16 lg:py-20">
          {/* BACKGROUND TEXT */}
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none text-[180px] font-semibold leading-none tracking-tight text-white/[0.03] lg:text-[420px]">
            CB7
          </div>

          {/* CONTENT */}
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
                A complete cloud-based core banking.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/70">
                Faster time to market with our cloud-based core banking
                services.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Button variant="primary">Request Demo</Button>
              </div>
              <LearnMoreLink />
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
                <Image
                  src="/images/cb7-dashboard.png"
                  alt="CB7 Dashboard"
                  width={700}
                  height={500}
                  className="h-auto w-full max-w-[620px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
