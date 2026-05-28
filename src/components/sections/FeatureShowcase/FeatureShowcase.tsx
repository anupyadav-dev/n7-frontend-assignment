"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import LearnMoreLink from "@/components/ui/LearnMoreLink";

export default function FeatureShowcase() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Background Text */}
          <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 select-none lg:block">
            <span className="text-[320px] font-semibold leading-none tracking-tight text-[#0B1733] opacity-40">
              CB7
            </span>
          </div>

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-xl"
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              A complete cloud-based core banking.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-white/60">
              Faster time to market with our cloud-based core banking services
            </p>

            <div className="mt-10 flex items-center gap-6">
              <Button variant="primary">Request Demo</Button>

              <LearnMoreLink></LearnMoreLink>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <Image
              src="/images/dashboard.png"
              alt="Core Banking Dashboard"
              width={900}
              height={650}
              className="h-auto w-full rounded-2xl object-contain shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
