"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  DollarSign,
  HelpCircle,
  Phone,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { allServices, symptomCheckerData, type ServiceCategory } from "@/lib/services-data";
import { site } from "@/lib/site";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/cn";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ServiceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeSymptomId, setActiveSymptomId] = useState<string>(symptomCheckerData[0].id);
  const reduceMotion = useReducedMotion();

  const filteredServices = allServices.filter((service) => {
    const matchesCat = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const selectedSymptom =
    symptomCheckerData.find((s) => s.id === activeSymptomId) || symptomCheckerData[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        kicker="Comprehensive Automotive Care"
        title="Dealer-Grade Diagnostics & Master Mechanical Repair"
        description="Every vehicle undergoes our 40-point digital inspection before any wrenches turn. Explore our full range of automotive repair and preventative maintenance services."
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/appointment">
            Book Service Appointment
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="secondary">
            <Phone className="mr-2 size-4" />
            Call Advisor: {site.phoneDisplay}
          </ButtonLink>
        </div>
      </PageHero>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col gap-4 rounded-xl border border-white/8 bg-secondary/60 p-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search services, symptoms, or vehicle parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-background/80 py-2.5 pl-10 pr-4 text-xs text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "All Services" },
              { id: "mechanical", label: "Mechanical & Brakes" },
              { id: "diagnostic", label: "Diagnostics" },
              { id: "climate", label: "A/C & Climate" },
              { id: "maintenance", label: "Scheduled Care" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as typeof selectedCategory)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-semibold tracking-wide transition-all",
                  selectedCategory === cat.id
                    ? "bg-accent text-white shadow-sm"
                    : "text-muted hover:bg-white/5 hover:text-foreground",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="mt-12 space-y-10">
          {filteredServices.length === 0 ? (
            <div className="rounded-xl border border-white/8 bg-secondary/30 py-16 text-center">
              <p className="text-sm text-muted">
                No services matched your search term "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 rounded-md bg-white/5 px-4 py-2 text-xs font-bold text-foreground hover:bg-white/10"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredServices.map((service, idx) => (
              <motion.section
                key={service.id}
                id={service.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="scroll-mt-24 rounded-2xl border border-white/8 bg-secondary/40 p-6 sm:p-8 lg:p-10 transition-all hover:border-white/15"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  {/* Left Overview (Span 7) */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-bold text-accent uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <Clock className="size-3.5" />
                        {service.turnaround}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                        <DollarSign className="size-3.5" />
                        {service.pricingEst}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Symptoms to watch for */}
                    <div className="mt-6 rounded-xl border border-white/6 bg-background/50 p-5">
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                        <AlertTriangle className="size-4" />
                        Common Symptoms You May Experience:
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.symptoms.map((symptom) => (
                          <li
                            key={symptom}
                            className="flex items-start gap-2 text-xs text-foreground/90"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: What's Included & Booking (Span 5) */}
                  <div className="flex flex-col justify-between rounded-xl border border-white/6 bg-background/70 p-6 lg:col-span-5">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        What's Included in This Service:
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.inclusions.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs text-foreground/90"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-accent"
                              strokeWidth={2.5}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 border-t border-white/8 pt-6">
                      <ButtonLink
                        href={`/appointment?service=${service.id}`}
                        className="w-full"
                      >
                        Schedule {service.title.split("&")[0].trim()}
                      </ButtonLink>
                      <p className="mt-2 text-center text-[11px] text-muted">
                        Backed by 12-Mo / 12k-Mi Nationwide Warranty
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion FAQ for this service */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="mt-8 border-t border-white/8 pt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                      Frequently Asked Questions
                    </h3>
                    <div className="mt-4 space-y-3">
                      {service.faqs.map((faq, fIdx) => {
                        const faqKey = `${service.id}-${fIdx}`;
                        const isOpen = openFaq === faqKey;
                        return (
                          <div
                            key={faq.question}
                            className="rounded-lg border border-white/6 bg-secondary/30"
                          >
                            <button
                              type="button"
                              onClick={() => setOpenFaq(isOpen ? null : faqKey)}
                              className="flex w-full items-center justify-between p-4 text-left text-xs font-semibold text-foreground transition-colors hover:text-accent"
                            >
                              <span>{faq.question}</span>
                              <ChevronDown
                                className={cn(
                                  "size-4 shrink-0 text-muted transition-transform duration-200",
                                  isOpen && "rotate-180 text-accent",
                                )}
                              />
                            </button>
                            {isOpen && (
                              <div className="border-t border-white/6 p-4 pt-2 text-xs text-muted leading-relaxed">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.section>
            ))
          )}
        </div>

        {/* Interactive Symptom Diagnostic Checker */}
        <div className="mt-20 rounded-2xl border border-accent/30 bg-gradient-to-b from-secondary/80 to-background/90 p-8 sm:p-12">
          <SectionHeading
            align="center"
            kicker="Interactive Diagnostic Tool"
            title="Vehicle Symptom Diagnostic Troubleshooter"
            description="Select what you are hearing, feeling, or seeing on your vehicle to understand the likely root cause and recommended next steps."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Symptom Selectors (Span 5) */}
            <div className="space-y-2 lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                Select Your Symptom:
              </p>
              {symptomCheckerData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSymptomId(item.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all",
                    activeSymptomId === item.id
                      ? "border-accent bg-accent/15 text-foreground shadow-sm"
                      : "border-white/8 bg-secondary/40 text-muted hover:border-white/20 hover:text-foreground",
                  )}
                >
                  <span className="text-xs font-medium">{item.symptom}</span>
                  <span
                    className={cn(
                      "rounded px-2 py-0.5 text-[10px] font-bold uppercase",
                      item.urgency === "Urgent"
                        ? "bg-rose-500/20 text-rose-400"
                        : item.urgency === "High"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-blue-500/20 text-blue-400",
                    )}
                  >
                    {item.urgency}
                  </span>
                </button>
              ))}
            </div>

            {/* Diagnostic Result Card (Span 7) */}
            <div className="rounded-xl border border-white/10 bg-background/90 p-7 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                      {selectedSymptom.category}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {selectedSymptom.symptom}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "rounded-md px-3 py-1 text-xs font-bold uppercase",
                      selectedSymptom.urgency === "Urgent"
                        ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        : selectedSymptom.urgency === "High"
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30",
                    )}
                  >
                    {selectedSymptom.urgency} Priority
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-xs">
                  <div>
                    <span className="font-bold text-muted uppercase tracking-wider text-[10px]">
                      Likely Root Cause:
                    </span>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {selectedSymptom.likelyCause}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-muted uppercase tracking-wider text-[10px]">
                      Recommended Action:
                    </span>
                    <p className="mt-1 text-sm text-foreground/90 leading-relaxed">
                      {selectedSymptom.recommendedService}
                    </p>
                  </div>

                  <p className="text-muted leading-relaxed">
                    Continuing to drive with this symptom can lead to secondary damage or hazardous road conditions. Bring your vehicle in for a digital diagnostic inspection.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/appointment" className="flex-1">
                  Schedule Diagnostic Check
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="secondary" className="flex-1">
                  <Phone className="mr-2 size-3.5" />
                  Ask a Mechanic ({site.phoneDisplay})
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
