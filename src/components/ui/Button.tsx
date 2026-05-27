import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "navbar";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const baseStyles =
    "rounded-xl px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-sky-500 to-blue-700 text-white hover:scale-105",

    secondary:
      "border border-white/20 bg-transparent text-white hover:bg-white hover:text-black",

    navbar:
      "border border-white/20 bg-transparent px-6 py-3 text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  );
}
