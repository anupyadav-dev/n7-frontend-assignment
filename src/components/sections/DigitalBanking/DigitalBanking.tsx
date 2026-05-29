import DigitalBankingFeature from "./DigitalBankingFeature";
import { digitalBankingFeatures } from "./digitalBankingData";

export default function DigitalBanking() {
  return (
    <section
      id="digital-banking"
      className="relative overflow-hidden bg-[#F3F6FC] py-24 lg:py-32"
    >
      {/* Decorative outlined circles — drift on the left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 h-[480px] w-[480px] rounded-full border border-slate-200/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-72 top-[55%] h-[600px] w-[600px] rounded-full border border-slate-200/60"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-28 lg:gap-36">
          {digitalBankingFeatures.map((f) => (
            <DigitalBankingFeature key={f.id} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
