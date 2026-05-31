"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import TrustedLogos from "./TrustedLogos";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816] pt-32 pb-16 text-white lg:pt-48 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
              The new foundation
              <br />
              of modern banking
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/60 sm:text-lg">
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                variant="primary"
                size="md"
                className="rounded-full px-10"
              >
                Request Demo
              </Button>

              <Button
                variant="secondary"
                size="md"
                className="rounded-full px-10"
              >
                Contact Us
              </Button>
            </div>

            <div className="mt-30 w-full">
              <TrustedLogos />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-end lg:-mr-6 xl:-mr-10"
          >
            {/* Soft glow centered behind image */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-3xl lg:h-[30rem] lg:w-[30rem]"
            />
            <div className="relative w-full max-w-xl lg:max-w-[640px]">
              <Image
                src="/images/hero-image.png"
                alt="Modern banking app with balance and recent activity cards"
                width={1200}
                height={900}
                priority
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
