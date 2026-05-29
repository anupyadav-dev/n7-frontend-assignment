"use client";

import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import SolutionCard from "./SolutionCard";
import { solutions } from "./solutionsData";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#050816] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT — heading + CTA (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="max-w-md text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
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
            className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2"
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
