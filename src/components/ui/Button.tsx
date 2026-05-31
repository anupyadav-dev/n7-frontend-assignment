import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark";
type Size = "sm" | "md";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-xl font-semibold uppercase tracking-[0.18em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[10px]",
  md: "h-[52px] px-8 text-[11px]",
};

const variants: Record<Variant, string> = {
  // CTA sections — Blue solid, hover: white bg + blue text
  primary:
    "bg-blue-600 text-white shadow-[0_8px_24px_-6px_rgba(59,130,246,0.5)] hover:bg-white hover:text-blue-600 hover:shadow-none",

  // CTA sections — Border only, hover: white bg + dark text (VISIBLE)
  secondary:
    "border border-white/50 bg-transparent text-white hover:bg-white hover:text-[#03080f]",

  // Navbar — Black bg white text, hover: white bg + dark text
  dark: "bg-[#0a0a0a] text-white border border-white/10 hover:bg-white hover:text-[#0a0a0a] hover:border-white",
};

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", className = "", children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
