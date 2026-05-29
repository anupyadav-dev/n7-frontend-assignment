import Image from "next/image";

import LearnMoreLink from "@/components/ui/LearnMoreLink";
import type { Solution } from "./solutionsData";

type Props = { solution: Solution };

export default function SolutionCard({ solution }: Props) {
  const { title, description, tag, icon, href } = solution;

  return (
    <article className="group relative flex flex-col">
      <div className="flex items-start justify-between">
        <div className="flex h-20 w-20 items-center justify-center">
          <Image
            src={icon}
            alt=""
            aria-hidden
            width={48}
            height={48}
            className="object-contain opacity-50 grayscale brightness-125 contrast-75"
          />
        </div>
        {tag && (
          <span className="relative top-11 text-[15px] font-medium uppercase tracking-[0.1em] text-white/50">
            {tag}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 max-w-full text-[1rem] leading-6 text-white/70">
        {description}
      </p>

      <div className="mt-6">
        <LearnMoreLink href={href} />
      </div>
    </article>
  );
}
