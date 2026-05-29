"use client";

import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import SolutionCard from "./SolutionCard";
import { solutions } from "./solutionsData";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#050816] py-12 text-white lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT — heading + CTA (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left xl:sticky xl:top-10"
          >
            <h2 className="max-w-md text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              All of our solutions are
              <br />
              tailor-made to your needs
            </h2>
            <div className="mt-10">
              <Button variant="secondary">Request Demo</Button>
            </div>
          </motion.div>

          {/* RIGHT — card grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:gap-x-10 lg:gap-y-14"
          >
            {solutions.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
