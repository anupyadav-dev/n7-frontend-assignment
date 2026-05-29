import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "dark" | "light";
};

export default function CheckItem({ children, variant = "dark" }: Props) {
  const textColor = variant === "light" ? "text-slate-700" : "text-white/70";

  return (
    <li className="flex gap-3">
      <span
        aria-hidden
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]"
      >
        <svg viewBox="0 0 20 20" fill="white" className="h-3.5 w-3.5">
          <path
            fillRule="evenodd"
            d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8.5 12 15.3 5.3a1 1 0 0 1 1.4 0Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className={`text-sm leading-7 sm:text-base ${textColor}`}>
        {children}
      </span>
    </li>
  );
}
