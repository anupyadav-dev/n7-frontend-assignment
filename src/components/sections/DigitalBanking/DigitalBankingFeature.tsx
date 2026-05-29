"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CheckItem from "@/components/ui/CheckItem";
import type { DigitalBankingFeatureData } from "./digitalBankingData";

type Props = { feature: DigitalBankingFeatureData };

export default function DigitalBankingFeature({ feature }: Props) {
  const { title, description, bullets, imageSrc, imageAlt, imageSide } =
    feature;

  const phoneOrder = imageSide === "left" ? "lg:order-1" : "lg:order-2";
  const contentOrder = imageSide === "left" ? "lg:order-2" : "lg:order-1";

  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 ${contentOrder}`}
      >
        <h3 className="text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
          {description}
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          {bullets.map((b) => (
            <CheckItem key={b} variant="light">
              {b}
            </CheckItem>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`relative flex justify-center ${phoneOrder}`}
      >
        <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={1600}
            className="h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(15,23,42,0.18)]"
          />
        </div>
      </motion.div>
    </div>
  );
}
