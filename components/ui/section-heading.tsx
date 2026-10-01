import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      {kicker ? (
        <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-muted uppercase sm:text-xs">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {kicker}
          {isCenter ? (
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
          ) : null}
        </p>
      ) : null}

      <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
