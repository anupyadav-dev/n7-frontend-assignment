import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex h-14 items-center justify-center rounded-xl px-12 text-[13px] font-semibold uppercase tracking-[0.18em] transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8] text-white shadow-[0_8px_24px_-6px_rgba(59,130,246,0.55)] hover:from-white hover:to-white hover:text-[#1D4ED8]",

    secondary:
      "border border-white text-white bg-transparent hover:bg-white hover:text-[#050816]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
