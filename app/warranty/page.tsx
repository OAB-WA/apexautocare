"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Check,
  CheckCircle2,
  FileCheck2,
  HelpCircle,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { coverageMatrix, claimSteps, warrantyTerms } from "@/lib/warranty-data";
import { site } from "@/lib/site";
import { Footer } from "@/components/footer";

export default function WarrantyPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: {
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Warranty & Protection" }]}
        kicker="Nationwide Peace of Mind"
        title="12-Month / 12,000-Mile Complete Warranty Coverage"
        description="Every qualifying mechanical repair and parts replacement at Apex Auto Care is backed by our comprehensive warranty. Drive anywhere across the United States with total confidence."
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/appointment">
            Book Warranty-Backed Service
          </ButtonLink>
          <ButtonLink href={warrantyTerms.hotlineHref} variant="secondary">
            <Phone className="mr-2 size-4" />
            Warranty Desk: {warrantyTerms.hotlineDisplay}
          </ButtonLink>
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Core Warranty Pillars Strip */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "12 Months / 12,000 Miles",
              subtitle: "Parts & Labor Guaranteed",
              desc: "Complete coverage on all qualified replacement parts and master technician installation labor.",
            },
            {
              title: "30,000+ Partner Shops",
              subtitle: "Nationwide Network",
              desc: "If an issue occurs while traveling out of state, our nationwide affiliate network has you covered.",
            },
            {
              title: "$0 Out-of-Pocket Deductible",
              subtitle: "Zero Hidden Fees",
              desc: "Approved warranty claims require zero deductible or administrative fees from you.",
            },
            {
              title: "Direct Shop Billing",
              subtitle: "Hassle-Free Reimbursement",
              desc: "We coordinate and authorize payment directly with visiting partner shops so you don’t have to wait for checks.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              {...fadeUp(idx * 0.08)}
              className="rounded-xl border border-white/8 bg-secondary/50 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex size-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-accent">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Matrix Table / Cards */}
        <section className="mt-20">
          <SectionHeading
            kicker="Transparent Protection Details"
            title="What’s Covered Under the Apex Warranty"
            description="We believe in clear terms with zero legal fine-print traps. Here is our itemized breakdown of covered systems vs. standard wear items."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {coverageMatrix.map((matrix, idx) => (
              <motion.div
                key={matrix.category}
                {...fadeUp(idx * 0.1)}
                className="rounded-2xl border border-white/8 bg-secondary/40 p-7 lg:p-8"
              >
                <h3 className="text-lg font-bold text-foreground border-b border-white/8 pb-3">
                  {matrix.category}
                </h3>

                {/* Covered List */}
                <div className="mt-5">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="size-4" />
                    Covered Under 12-Mo Warranty:
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {matrix.covered.map((cov) => (
                      <li
                        key={cov}
                        className="flex items-start gap-2 text-xs text-foreground/90"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                        <span>{cov}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Covered / Exceptions */}
                <div className="mt-6 border-t border-white/6 pt-5">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider">
                    <ShieldAlert className="size-4" />
                    Exclusions & Normal Wear:
                  </span>
                  <ul className="mt-3 space-y-2">
                    {matrix.notCovered.map((nc) => (
                      <li
                        key={nc}
                        className="flex items-start gap-2 text-xs text-muted"
                      >
                        <X className="mt-0.5 size-3.5 shrink-0 text-rose-400/80" />
                        <span>{nc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4-Step Claim Process */}
        <section className="mt-20 rounded-2xl border border-white/8 bg-secondary/60 p-8 sm:p-12">
          <SectionHeading
            align="center"
            kicker="Simple Claim Procedure"
            title="How to File an Out-of-Town Warranty Claim"
            description="If you experience a defect while away from Austin, follow these four simple steps for instant nationwide coverage."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {claimSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-white/6 bg-background/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-accent">
                    {step.step}
                  </span>
                  <h4 className="mt-3 text-sm font-bold text-foreground">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
