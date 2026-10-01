"use client";

import { motion, useReducedMotion } from "motion/react";
import { Award, ShieldCheck, Smartphone, Star } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: "15+ Years",
    label: "Austin Community Trusted",
    detail: "Family-owned & independent since 2011",
  },
  {
    icon: Star,
    value: "4.9 / 5.0",
    label: "Google Verified Rating",
    detail: "Over 650+ five-star local reviews",
  },
  {
    icon: ShieldCheck,
    value: "12-Mo / 12k-Mi",
    label: "Nationwide Warranty",
    detail: "Parts and labor guaranteed on all repairs",
  },
  {
    icon: Smartphone,
    value: "100% Digital",
    label: "Photo & Video Reports",
    detail: "Full transparency before work begins",
  },
];

export function TrustBar() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 border-y border-white/8 bg-secondary/80 py-10 backdrop-blur-md sm:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col justify-between rounded-lg border border-white/6 bg-background/50 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-background/80"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {item.value}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold tracking-wide text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
