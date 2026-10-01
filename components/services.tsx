"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Check,
  Disc,
  Flame,
  Gauge,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export type ServiceItem = {
  id: string;
  title: string;
  category: "mechanical" | "diagnostic" | "maintenance";
  icon: typeof Activity;
  tagline: string;
  description: string;
  turnaround: string;
  features: string[];
};

export const servicesData: ServiceItem[] = [
  {
    id: "diagnostics",
    title: "Computer Diagnostics & Electrical",
    category: "diagnostic",
    icon: Activity,
    tagline: "Pinpoint accuracy for warning lights & phantom issues",
    description:
      "State-of-the-art OEM level scan tools to accurately read ECU codes, test sensor telemetry, diagnose wiring shorts, and check battery/alternator health.",
    turnaround: "Same-Day Analysis",
    features: [
      "Check Engine & ABS Light Diagnostics",
      "CAN-bus & Electrical Wire Tracing",
      "Battery, Starter & Alternator Testing",
      "Digital Sensor & Module Reprogramming",
    ],
  },
  {
    id: "brakes",
    title: "Brake Systems & Rotors",
    category: "mechanical",
    icon: Disc,
    tagline: "Maximum stopping power & precision safety",
    description:
      "Complete brake system overhaul using premium low-dust ceramic pads, precision-machined or OEM rotors, caliper overhauls, and hydraulic fluid flushes.",
    turnaround: "Same-Day Service",
    features: [
      "Ceramic & Semi-Metallic Brake Pads",
      "Rotor Resurfacing & Replacement",
      "Caliper, Master Cylinder & Line Repair",
      "Full Synthetic DOT4 Hydraulic Fluid Flush",
    ],
  },
  {
    id: "engine",
    title: "Engine & Drivetrain Repair",
    category: "mechanical",
    icon: Gauge,
    tagline: "Restoring horsepower, reliability, and smooth shifts",
    description:
      "Expert mechanical care from timing belt replacements and head gaskets to full transmission rebuilds, fluid changes, and cooling system overhauls.",
    turnaround: "1 - 3 Days",
    features: [
      "Timing Belt & Water Pump Replacement",
      "Transmission Diagnostics & Fluid Service",
      "Gaskets, Oil Leaks & Seal Repairs",
      "Turbocharger & Fuel Injector Service",
    ],
  },
  {
    id: "ac-heating",
    title: "A/C & Climate Control",
    category: "mechanical",
    icon: Zap,
    tagline: "Keep cool in the relentless Austin Texas heat",
    description:
      "Complete air conditioning system diagnosis including R134a and R1234yf refrigerant evacuation/recharge, compressor repairs, condenser flushes, and heater cores.",
    turnaround: "Same-Day Service",
    features: [
      "R134a & Modern R1234yf Recharge",
      "Electronic UV Dye Leak Detection",
      "A/C Compressor & Condenser Replacement",
      "Cabin Filter & Evaporator Sanitization",
    ],
  },
  {
    id: "suspension",
    title: "Suspension, Steering & Alignment",
    category: "mechanical",
    icon: Wrench,
    tagline: "Laser-accurate tracking & cloud-smooth road feel",
    description:
      "Eliminate vibrations, pulling, and clunking sounds with our laser 4-wheel alignment, shock and strut replacements, control arm bushings, and power steering service.",
    turnaround: "Same-Day Service",
    features: [
      "Laser Computerized 4-Wheel Alignment",
      "Struts, Shocks & Air Suspension Systems",
      "Control Arms, Ball Joints & Tie Rods",
      "Power Steering Rack & Pump Repairs",
    ],
  },
  {
    id: "maintenance",
    title: "Factory Scheduled Maintenance",
    category: "maintenance",
    icon: Sparkles,
    tagline: "Maintain warranty coverage & prevent costly breakdowns",
    description:
      "Comprehensive 30k, 60k, and 90k mile scheduled services including premium full-synthetic motor oils, OEM filters, spark plugs, and our 40-point inspection.",
    turnaround: "60 - 90 Minutes",
    features: [
      "Full-Synthetic Oil & Filter Service",
      "30k / 60k / 90k / 120k Factory Intervals",
      "Spark Plugs, Coils & Ignition Tuning",
      "Complimentary Digital Safety Inspection",
    ],
  },
];

type CategoryFilter = "all" | "mechanical" | "diagnostic" | "maintenance";

export function Services() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const reduceMotion = useReducedMotion();

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-16 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            kicker="Comprehensive Auto Solutions"
            title="Engineered for Precision & Longevity"
            description="From routine maintenance to intricate mechanical rebuilds, our ASE-certified technicians leverage dealer-grade equipment to service all domestic, European, and Asian vehicles."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-white/8 bg-secondary/80 p-1.5 backdrop-blur-sm">
            {(
              [
                { id: "all", label: "All Services" },
                { id: "mechanical", label: "Mechanical & Brakes" },
                { id: "diagnostic", label: "Diagnostics" },
                { id: "maintenance", label: "Scheduled Care" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-md px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-accent text-white shadow-sm"
                    : "text-muted hover:text-foreground hover:bg-white/5",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col justify-between rounded-xl border border-white/8 bg-secondary/40 p-7 transition-all duration-300 hover:border-white/20 hover:bg-secondary/70 hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-background/80 text-accent transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                      <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted">
                      {service.turnaround}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-accent">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/6 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs text-foreground/90"
                      >
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-accent"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/6 pt-5">
                  <a
                    href={`${site.bookingHref}?service=${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-foreground transition-colors group-hover:text-accent"
                  >
                    Schedule This Service
                    <ArrowRight
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Diagnostic Callout Banner */}
        <div className="mt-12 rounded-xl border border-accent/30 bg-gradient-to-r from-accent/15 via-secondary/80 to-secondary/40 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                <Flame className="size-4" aria-hidden="true" />
                Unsure of the issue?
              </span>
              <h3 className="mt-2 text-xl font-extrabold text-foreground sm:text-2xl">
                Get a Comprehensive 40-Point Digital Inspection
              </h3>
              <p className="mt-2 text-sm text-muted">
                Bring your vehicle in for a complete diagnostic evaluation. We
                provide a transparent digital breakdown with photos, videos, and
                plain-English explanations before any work begins.
              </p>
            </div>
            <ButtonLink href={site.bookingHref} className="shrink-0">
              Book Diagnostic Check
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
