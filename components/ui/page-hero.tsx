"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  kicker?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  breadcrumbs,
  kicker,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-white/8 bg-secondary/40 pt-28 pb-16 sm:pt-36 sm:pb-20",
        className,
      )}
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background/90"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-muted">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {idx > 0 && (
                    <ChevronRight className="size-3 text-muted/50" aria-hidden="true" />
                  )}
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-foreground">
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          {kicker && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-muted uppercase sm:text-xs"
            >
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              {kicker}
            </motion.p>
          )}

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-base text-muted leading-relaxed sm:text-lg"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
