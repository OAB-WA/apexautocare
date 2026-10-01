"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Camera,
  Coffee,
  DollarSign,
  FileCheck2,
  Lock,
  MessageSquareCheck,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button-link";

export function About() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-16 bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          kicker="The Apex Standard"
          title="The Auto Shop You Can Actually Trust"
          description="We built Apex Auto Care to eradicate the stereotypes of traditional auto repair. No condescending jargon, no surprise bills, and no unnecessary upsells — just pure craftsmanship and radical transparency."
        />

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-12">
          {/* Bento Item 1: Digital Inspection Showcase (Span 7) */}
          <motion.div
            {...fadeUp(0.1)}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-secondary/80 to-background/90 p-8 md:col-span-3 lg:col-span-7"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent uppercase tracking-wider">
                <Smartphone className="size-3.5" aria-hidden="true" />
                Live Digital Inspection
              </span>
              <span className="text-xs text-muted">Sent via SMS</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              See Exactly What We See with Photo & Video Proof
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Never wonder if a repair is actually necessary. Our technicians
              record high-definition videos and photos of your vehicle's components,
              grading them with simple color indicators:
            </p>

            {/* Mock Digital Report Cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3.5">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  Green: Good Condition
                </span>
                <p className="mt-1 text-[11px] text-muted">
                  Tires, Belts & Alternator operating within factory spec.
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3.5">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <span className="size-2 rounded-full bg-amber-400" />
                  Yellow: Monitor Soon
                </span>
                <p className="mt-1 text-[11px] text-muted">
                  Front brake pads at 4mm. Good for ~4,000 more miles.
                </p>
              </div>

              <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-3.5">
                <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                  <span className="size-2 rounded-full bg-rose-400" />
                  Red: Urgent Action
                </span>
                <p className="mt-1 text-[11px] text-muted">
                  Cracked serpentine belt risking immediate loss of power.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-foreground/80">
              <MessageSquareCheck className="size-4 text-accent" />
              You approve or decline each individual item from your phone before we begin.
            </div>
          </motion.div>

          {/* Bento Item 2: Upfront Guaranteed Pricing (Span 5) */}
          <motion.div
            {...fadeUp(0.2)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-secondary/60 p-8 md:col-span-3 lg:col-span-5"
          >
            <div>
              <div className="flex size-11 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
                <DollarSign className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                Upfront Fixed Quotes. Zero Hidden Surcharges.
              </h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">
                We believe in ethical pricing. The estimate you authorize is the exact
                price you pay. If we encounter a rusted bolt or unexpected hurdle, our
                quote doesn't magically inflate.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-white/6 bg-background/60 p-4">
              <div className="flex items-center gap-3 text-xs text-foreground font-semibold">
                <Lock className="size-4 text-accent shrink-0" />
                Price Lock Guarantee
              </div>
              <p className="mt-1 text-[11px] text-muted">
                100% itemized parts and labor breakdowns with zero shop supply markups.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3: ASE Master Certified (Span 4) */}
          <motion.div
            {...fadeUp(0.3)}
            className="group relative rounded-2xl border border-white/8 bg-secondary/50 p-7 lg:col-span-4"
          >
            <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
              <Wrench className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
              Master ASE Technicians
            </h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              Our mechanics undergo 50+ hours of annual advanced training on the
              latest hybrid, electric, European, and domestic vehicle platforms.
            </p>
          </motion.div>

          {/* Bento Item 4: Austin Driver Lounge & Courtesy Shuttle (Span 4) */}
          <motion.div
            {...fadeUp(0.4)}
            className="group relative rounded-2xl border border-white/8 bg-secondary/50 p-7 lg:col-span-4"
          >
            <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
              <Coffee className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
              Executive Lounge & Loaners
            </h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              Work uninterrupted with gigabit Wi-Fi and complimentary local roast
              espresso, or borrow one of our clean courtesy loaner vehicles.
            </p>
          </motion.div>

          {/* Bento Item 5: 12-Month Nationwide Warranty (Span 4) */}
          <motion.div
            {...fadeUp(0.5)}
            className="group relative rounded-2xl border border-white/8 bg-secondary/50 p-7 lg:col-span-4"
          >
            <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
              <FileCheck2 className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
              12-Mo / 12k-Mi Warranty
            </h3>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              Drive with total peace of mind. Every qualifying repair is covered
              nationwide across thousands of certified partner network shops.
            </p>
          </motion.div>
        </div>

        {/* Experience CTA */}
        <div className="mt-12 text-center">
          <ButtonLink href={site.bookingHref} className="px-8 py-3.5 text-sm">
            Experience the Apex Difference
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
