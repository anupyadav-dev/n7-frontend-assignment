import Link from "next/link";

type Props = {
  href?: string;
};

export default function LearnMoreLink({ href = "#" }: Props) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B82F6] transition"
    >
      Learn More
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
