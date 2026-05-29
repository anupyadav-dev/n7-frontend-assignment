"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function PaperlessCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-14 lg:px-16 lg:py-20">
          {/* CB7 outline watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
          >
            <span
              className="whitespace-nowrap font-bold leading-none tracking-tight text-transparent"
              style={{
                fontSize: "clamp(180px, 22vw, 360px)",
                WebkitTextStroke: "1px rgba(59, 130, 246, 0.22)",
              }}
            >
              CB7
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16"
          >
            <div>
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <Button variant="secondary">Contact Us</Button>
              <Button variant="primary">Request Demo</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
