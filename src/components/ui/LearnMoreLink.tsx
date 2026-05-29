import Link from "next/link";

type Props = {
  href?: string;
  label?: string;
};

export default function LearnMoreLink({
  href = "#",
  label = "Learn More",
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 transition-colors hover:text-sky-300"
    >
      <span className="group/learn relative inline-block">
        {label}

        <span className="absolute -bottom-1 left-0 h-[1px] w-8 bg-sky-400 transition-all duration-300 group-hover/learn:w-full" />
      </span>

      <span aria-hidden>→</span>
    </Link>
  );
}
