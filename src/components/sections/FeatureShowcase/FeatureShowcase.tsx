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
            className="pointer-events-none absolute inset-0 z-0 hidden lg:flex"
          >
            <span
              className="select-none font-semibold leading-none tracking-[0.01em] text-transparent"
              style={{
                fontSize: "clamp(320px, 42vw, 760px)",
                WebkitTextStroke: "1px rgba(59,130,246,0.12)",
                transform: "translateX(-20%)",
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
            className="relative z-20 max-w-[540px] lg:-translate-y-10"
          >
            <h2 className="max-w-[560px] text-[2rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[3.6rem] lg:text-[3rem]">
              A complete cloud-based
              <br />
              core banking.
            </h2>

            <p className="mt-8 max-w-[420px] text-lg leading-8 text-white/60">
              Faster time to market with our cloud-based core banking services
            </p>

            <div className="mt-12 flex flex-col items-start gap-5">
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
            className="relative z-10 lg:-mr-24"
          >
            <div className="relative lg:translate-x-24">
              {/* OUTER BLUE FRAME */}
              <div className="relative rounded-[2.7rem]">
                {/* DASHBOARD IMAGE */}
                <div className="w-full max-w-[651px] mx-auto lg:mx-0">
                  <div className="relative aspect-[651/461] overflow-hidden rounded-[1rem]">
                    <Image
                      src="/images/dashboard.png"
                      alt="Core banking dashboard"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* CONNECTED RECTANGLE SHELF */}
                <Image
                  src="/images/Rectangle.png"
                  alt=""
                  aria-hidden
                  width={1400}
                  height={100}
                  className="pointer-events-none absolute -bottom-5 left-1/2 z-0 w-[97%] -translate-x-1/2 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
