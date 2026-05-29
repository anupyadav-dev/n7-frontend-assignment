"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CheckItem from "@/components/ui/CheckItem";

const featuresLeft = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const featuresRight = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export default function CoreBankingFeatures() {
  return (
    <section
      id="corebanking-features"
      className="relative overflow-hidden bg-[#050816] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* LEFT — Dashboard card (overflows past left edge on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="relative w-full lg:w-[135%] lg:-translate-x-12 xl:-translate-x-20">
              {/* Dashboard with constrained aspect ratio */}
              <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]">
                <Image
                  src="/images/kyc-dashboard.png"
                  alt="KYC dashboard showing total customers, KYC progress metrics, branch-level table, and periodic response bar chart"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Rectangle accent — shelf */}
              <Image
                src="/images/Rectangle.png"
                alt=""
                aria-hidden
                width={1400}
                height={80}
                className="pointer-events-none absolute -bottom-4 right-6 z-0 h-auto w-[94%] object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Run a more efficient, flexible, and digitally connected
              corebanking system
            </h2>

            <p className="mt-10 text-base font-semibold text-white sm:text-lg">
              What you will get:
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              <ul className="flex flex-col gap-5">
                {featuresLeft.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <ul className="flex flex-col gap-5">
                {featuresRight.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
