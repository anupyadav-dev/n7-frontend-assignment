import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const baseStyles =
    "rounded-full px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",

    secondary: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  );
}
