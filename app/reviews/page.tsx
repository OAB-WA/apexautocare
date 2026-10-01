"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckCircle,
  ExternalLink,
  Filter,
  MessageSquareQuote,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { extendedReviews, caseStudies, type ExtendedReview } from "@/lib/reviews-data";
import { site } from "@/lib/site";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/cn";

export default function ReviewsPage() {
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("all");
  const reduceMotion = useReducedMotion();

  const filteredReviews = extendedReviews.filter((rev) => {
    const matchMake = selectedMake === "all" || rev.vehicleMake === selectedMake;
    const matchService = selectedService === "all" || rev.serviceCategory === selectedService;
    return matchMake && matchService;
  });

  const allMakes = ["all", "Ford", "BMW", "Toyota", "Subaru", "Porsche", "Chevrolet", "Honda", "Tesla"];
  const allServicesList = ["all", "Brakes", "Diagnostics", "Engine", "AC", "Suspension", "Maintenance"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        kicker="Verified Driver Experiences"
        title="4.9 Stars Across 650+ Austin Vehicle Owners"
        description="See why Austin drivers trust Apex Auto Care with their trucks, daily drivers, and European luxury sports cars. Filter by vehicle make or service."
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/appointment">
            Book Your Service
          </ButtonLink>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-white/40 hover:bg-white/10"
          >
            Leave a Google Review
            <ExternalLink className="ml-2 size-4 text-accent" />
          </a>
        </div>
      </PageHero>

      {/* Main Review Section */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Rating Metrics Strip */}
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-white/8 bg-secondary/50 p-6 sm:grid-cols-3 sm:p-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-extrabold text-foreground sm:text-5xl">
              4.9
            </span>
            <div>
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400" />
                ))}
              </div>
              <p className="mt-1 text-xs text-muted">
                Overall Google Score
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:border-x sm:border-white/8 sm:px-6">
            <span className="text-3xl font-extrabold text-accent">98.4%</span>
            <p className="text-xs text-muted">
              First-Visit Resolution Rate with zero return diagnostics
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-extrabold text-foreground">650+</span>
            <p className="text-xs text-muted">
              Verified 5-Star Reviews across Travis County & Austin Metro
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 rounded-xl border border-white/8 bg-secondary/40 p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-4">
            <Filter className="size-3.5" />
            Filter Reviews by Vehicle Make & Service:
          </div>

          {/* Make Filters */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-white/6 pb-4">
            <span className="text-xs text-muted mr-2 font-medium">Make:</span>
            {allMakes.map((make) => (
              <button
                key={make}
                type="button"
                onClick={() => setSelectedMake(make)}
                className={cn(
                  "rounded-md px-3 py-1 text-xs font-semibold tracking-wide transition-all capitalize",
                  selectedMake === make
                    ? "bg-accent text-white shadow-sm"
                    : "text-muted hover:bg-white/5 hover:text-foreground",
                )}
              >
                {make === "all" ? "All Makes" : make}
              </button>
            ))}
          </div>

          {/* Service Filters */}
          <div className="flex flex-wrap items-center gap-1.5 pt-4">
            <span className="text-xs text-muted mr-2 font-medium">Category:</span>
            {allServicesList.map((svc) => (
              <button
                key={svc}
                type="button"
                onClick={() => setSelectedService(svc)}
                className={cn(
                  "rounded-md px-3 py-1 text-xs font-semibold tracking-wide transition-all capitalize",
                  selectedService === svc
                    ? "bg-white/15 text-foreground border border-white/20"
                    : "text-muted hover:bg-white/5 hover:text-foreground",
                )}
              >
                {svc === "all" ? "All Services" : svc}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredReviews.length === 0 ? (
            <div className="col-span-2 rounded-xl border border-white/8 bg-secondary/30 py-12 text-center text-sm text-muted">
              No reviews matched your exact filter combination.
              <button
                type="button"
                onClick={() => {
                  setSelectedMake("all");
                  setSelectedService("all");
                }}
                className="mt-3 block mx-auto text-xs font-bold text-accent underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredReviews.map((rev, idx) => (
              <motion.article
                key={rev.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col justify-between rounded-xl border border-white/8 bg-secondary/50 p-7 transition-all hover:border-white/20 hover:bg-secondary/70"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                      <CheckCircle className="size-3" />
                      {rev.source}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-foreground">
                    "{rev.title}"
                  </h3>

                  <p className="mt-2.5 text-xs text-muted leading-relaxed sm:text-sm">
                    {rev.content}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/6 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-foreground">
                        {rev.author}
                      </p>
                      <p className="text-[11px] text-muted">
                        {rev.neighborhood} • {rev.date}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="inline-block rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-foreground">
                        {rev.vehicleModel}
                      </span>
                      <p className="mt-0.5 text-[10px] font-semibold text-accent">
                        {rev.serviceCategory} Service
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>

        {/* Featured Case Studies Section */}
        <section className="mt-20 border-t border-white/8 pt-16">
          <SectionHeading
            kicker="Technical Case Studies"
            title="Real Repair Logs from Our Austin Shop"
            description="Explore how our master technicians diagnose complex intermittent issues, save drivers money, and restore optimal performance."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl border border-white/8 bg-secondary/60 p-7 lg:p-8"
              >
                <span className="rounded bg-accent/10 border border-accent/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                  {cs.category}
                </span>

                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {cs.title}
                </h3>

                <div className="mt-5 space-y-3.5 text-xs">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-muted text-[10px]">
                      Customer Problem:
                    </span>
                    <p className="mt-1 text-foreground/90 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-wider text-accent text-[10px]">
                      Apex Diagnostic Discovery:
                    </span>
                    <p className="mt-1 text-muted leading-relaxed">
                      {cs.diagnostic}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-wider text-emerald-400 text-[10px]">
                      Master Repair Solution:
                    </span>
                    <p className="mt-1 text-foreground/90 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
                    <span className="font-bold text-emerald-400 text-[11px]">
                      Final Outcome:
                    </span>
                    <p className="mt-0.5 text-[11px] text-muted">
                      {cs.outcome}
                    </p>
                  </div>
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
