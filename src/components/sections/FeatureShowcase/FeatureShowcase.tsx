"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import LearnMoreLink from "@/components/ui/LearnMoreLink";

export default function FeatureShowcase() {
  return (
    <section
      id="core-banking"
      className="relative overflow-hidden py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* OUTLINE WATERMARK — CB7 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden select-none items-center sm:flex"
          >
            <span
              className="whitespace-nowrap font-bold leading-none tracking-tight text-transparent"
              style={{
                fontSize: "clamp(180px, 28vw, 460px)",
                WebkitTextStroke: "1px rgba(148, 163, 184, 0.18)",
              }}
            >
              CB7
            </span>
          </div>

          {/* LEFT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 max-w-xl"
          >
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              A complete cloud-based
              <br />
              core banking.
            </h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-white/55 sm:text-lg">
              Faster time to market with our cloud-based core banking services
            </p>

            <div className="mt-10 flex flex-col items-start gap-6">
              <Button variant="primary">Request Demo</Button>
              <LearnMoreLink />
            </div>
          </motion.div>

          {/* RIGHT — DASHBOARD CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="relative w-full lg:w-[135%] lg:translate-x-12 xl:translate-x-20">
              {/* Dashboard card */}
              {/* Dashboard card — constrained aspect ratio so image never overflows shelf */}
              <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]">
                <Image
                  src="/images/dashboard.png"
                  alt="AML dashboard showing suspicious transaction reports, donut chart of reasons, STR summary bar chart, and case-level report table"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Rectangle accent — shelf below dashboard */}
              <Image
                src="/images/Rectangle.png"
                alt=""
                aria-hidden
                width={1400}
                height={80}
                className="pointer-events-none absolute -bottom-4 left-6 z-0 h-auto w-[94%] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
