"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import LearnMoreLink from "@/components/ui/LearnMoreLink";

export default function FeatureShowcase() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
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
            <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white lg:text-6xl">
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
              className="h-auto w-full rounded-2xl object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
