import Link from "next/link";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
      aria-label="Apex Auto Care home"
    >
      <span
        className="h-8 w-px bg-accent transition-opacity group-hover:opacity-80"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.22em] text-foreground">
          APEX
        </span>
        <span className="mt-1 text-[9px] font-medium tracking-[0.38em] text-muted">
          AUTO CARE
        </span>
      </span>
    </Link>
  );
}
