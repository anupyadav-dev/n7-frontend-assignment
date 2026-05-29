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
    <section className="relative bg-[#050816] text-white py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* GRID (SAFE RESPONSIVE SYSTEM) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1 }}
            className="flex justify-center xl:justify-start"
          >
            <div className="w-full max-w-[600px]">
              <div className="relative aspect-[631/409] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <Image
                  src="/images/kyc-dashboard.png"
                  alt="KYC dashboard"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <Image
                src="/images/Rectangle.png"
                alt=""
                aria-hidden
                width={1200}
                height={80}
                className="mt-[-10px] w-[90%] mx-auto opacity-80"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center xl:justify-start"
          >
            <div className="w-full max-w-[560px]">
              {/* HEADING */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug tracking-tight">
                Run a more efficient, flexible, and digitally
                <br />
                connected corebanking system
              </h2>

              {/* SUBTITLE */}
              <p className="mt-5 text-sm sm:text-base lg:text-lg font-semibold text-white/90">
                What you will get:
              </p>

              {/* FEATURES */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <ul className="flex flex-col gap-3">
                  {featuresLeft.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>

                <ul className="flex flex-col gap-3">
                  {featuresRight.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
