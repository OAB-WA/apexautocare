import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonLinkProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        isPrimary
          ? "bg-accent text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset] hover:-translate-y-px hover:bg-accent-hover"
          : "border border-white/20 bg-white/0 text-foreground hover:-translate-y-px hover:border-white/40 hover:bg-white/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
