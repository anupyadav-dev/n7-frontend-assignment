"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function PaperlessCTA() {
  return (
    <section className="relative bg-[#050816] py-20 sm:py-24 lg:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CARD */}
        <div
          className="relative overflow-hidden rounded-2xl px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-32"
          style={{
            background:
              "linear-gradient(135deg, rgba(5,18,32,0.97) 0%, rgba(3,12,24,0.99) 100%)",
            boxShadow:
              "inset 0 0 0 1px rgba(59,130,246,0.10), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          {/* LEFT GLOW */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[60%]"
            style={{
              background:
                "radial-gradient(ellipse at left, rgba(14,116,144,0.16) 0%, rgba(3,30,55,0.08) 55%, transparent 80%)",
            }}
          />

          {/* CB7 WATERMARK */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none"
          >
            <span
              className="whitespace-nowrap font-bold leading-none text-transparent"
              style={{
                fontSize: "clamp(240px, 36vw, 640px)",
                letterSpacing: "0.02em",
                WebkitTextStroke: "1.5px rgba(59,130,246,0.20)",
                transform: "translate(16%, -10%)",
              }}
            >
              CB7
            </span>
          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 grid items-start gap-10 lg:grid-cols-2"
          >
            {/* LEFT */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1]">
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-6 text-white/40 max-w-md">
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations
              </p>
            </div>

            {/* RIGHT — RESPONSIVE BUTTONS */}
            <div className="flex lg:justify-start justify-start items-start">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-6 lg:mt-8">
                <Button variant="secondary">Contact Us</Button>

                <Button variant="primary">Request Demo</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
