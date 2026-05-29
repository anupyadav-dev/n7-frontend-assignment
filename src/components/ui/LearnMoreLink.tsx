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
      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3B82F6] underline-offset-8 transition-colors hover:text-[#93C5FD] hover:underline"
    >
      {label}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
