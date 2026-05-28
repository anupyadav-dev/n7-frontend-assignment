"use client";

import { motion } from "framer-motion";
import TrustedLogos from "./TrustedLogos";
import Image from "next/image";
import Button from "../../ui/Button";

export default function Hero() {
  return (
    <header className="overflow-hidden text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 items-center gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          {/* LEFT SIDE */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              FUTURE OF BANKING
            </p> */}

            <h1 className="max-w-[650px] text-[52px] font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.5rem]">
              The new foundation
              <br />
              of modern banking
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-gray-300/80">
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button variant="primary">Request Demo</Button>

              <Button variant="secondary">Contact Us</Button>
            </div>
            <div className="mt-16 w-full text-center lg:text-left">
              <TrustedLogos />
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 flex items-center justify-center lg:mt-0 lg:justify-end"
          >
            {/* Glow */}
            <div className="absolute left-20 top-[58%] h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-sky-500/60 blur-[90px] lg:h-[280px] lg:w-[250px]" />

            {/* Hero Image */}
            <div className="relative w-full max-w-[620px]">
              <Image
                src="/images/hero-image.png"
                alt="Modern Banking"
                width={900}
                height={700}
                priority
                className="relative z-10 h-auto w-full object-contain "
              />
            </div>
          </motion.div>
        </section>
      </div>
    </header>
  );
}
