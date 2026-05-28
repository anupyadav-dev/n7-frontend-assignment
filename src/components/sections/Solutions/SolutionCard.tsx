import Image from "next/image";
import LearnMoreLink from "@/components/ui/LearnMoreLink";

import type { Solution } from "./solutionsData";

type Props = {
  solution: Solution;
};

export default function SolutionCard({ solution }: Props) {
  const { title, description, tag, icon, href } = solution;

  return (
    <article className="group relative flex flex-col">
      {/* TOP */}
      <div className="flex items-start justify-between">
        {/* ICON */}
        <div className="flex h-10 w-10 items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={36}
            height={36}
            className="h-auto w-auto object-contain"
          />
        </div>

        {/* TAG */}
        {tag && (
          <span className="text-[15px] font-medium uppercase tracking-[0.18em] text-white/50">
            {tag}
          </span>
        )}
      </div>

      {/* TITLE */}
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>

      {/* DESCRIPTION */}
      <p className="mt-4 text-sm leading-7 text-white/55">{description}</p>

      {/* CTA */}
      <div className="mt-6">
        <LearnMoreLink href={href} />
      </div>
    </article>
  );
}
