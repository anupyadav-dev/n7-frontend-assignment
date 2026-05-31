"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

type CTAVariant = "cb7" | "n7" | "clean";

const variants = {
  cb7: {
    brand: "CB7",
    bg: "#03080f",
    glow: true,
    watermark: "CB7",
    wmLeft: "18%",
    wmSpacing: "0.02em",
    wmSize: "clamp(200px, 38vw, 640px)",
    wmStroke: "1.5px rgba(59,130,246,0.22)",
  },
  n7: {
    brand: "N7",
    bg: "#020609",
    glow: false,
    watermark: "N7",
    wmLeft: "46%",
    wmSpacing: "-0.04em",
    wmSize: "clamp(200px, 42vw, 700px)",
    wmStroke: "1.5px rgba(59,130,246,0.18)",
  },
  clean: {
    brand: "CB7",
    bg: "transparent",
    glow: false,
    watermark: null,
    wmLeft: "",
    wmSpacing: "",
    wmSize: "",
    wmStroke: "",
  },
} satisfies Record<CTAVariant, object>;

export default function PaperlessCTA({
  variant = "cb7",
}: {
  variant?: CTAVariant;
}) {
  const v = variants[variant];

  const hasBorder = variant === "cb7" || variant === "n7";

  return (
    // Section: sirf outer spacing aur page bg
    // Glow/watermark/bg sab border ke ANDAR hain
    <section className="px-4 py-6 text-white sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-25 lg:py-25">
      {/* CARD — full width, border, bg, glow, watermark sab iske andar */}
      <div
        className={`relative mx-auto w-full overflow-hidden ${
          hasBorder ? "rounded-4xl border border-white/10" : ""
        }`}
        style={{
          backgroundColor: v.bg,
          maxWidth: "1284px",
          minHeight: "clamp(320px, 45vw, 425px)",
        }}
      >
        {/* GLOW — border ke andar */}
        {v.glow && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 select-none"
            style={{
              background: [
                "radial-gradient(ellipse 60% 75% at 18% 50%,",
                "  rgba(14,116,144,0.40) 0%,",
                "  rgba(6,60,90,0.20) 50%,",
                "  transparent 75%)",
              ].join(""),
            }}
          />
        )}

        {/* WATERMARK — border ke andar, overflow hidden card tak */}
        {v.watermark && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden select-none items-center overflow-hidden md:flex"
          >
            <span
              className="whitespace-nowrap font-black leading-none text-transparent"
              style={{
                fontSize: v.wmSize,
                letterSpacing: v.wmSpacing,
                WebkitTextStroke: v.wmStroke,
                position: "relative",
                left: v.wmLeft,
                top: "-17%",
              }}
            >
              {v.watermark}
            </span>
          </div>
        )}

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-18 lg:px-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[52%_48%] lg:gap-0"
          >
            <div>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.25rem] lg:text-[3rem]">
                Take the full advantage of
                <br />
                going paper-less now.
              </h2>
              <p className="mt-8 max-w-lg text-md leading-6 text-white/60">
                {v.brand} helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations
              </p>
            </div>

            <div className="flex items-start justify-start pt-2 sm:pt-4 md:pt-6 lg:justify-end lg:pt-[4.8rem]">
              <div className="flex w-full flex-row gap-3 sm:w-auto sm:gap-4">
                <div className="flex-1 sm:flex-none">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-[180px] lg:w-[200px]"
                  >
                    Contact Us
                  </Button>
                </div>
                <div className="flex-1 sm:flex-none">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-[180px] lg:w-[200px]"
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
