"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Award,
  CheckCircle2,
  Cpu,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { teamMembers, shopEquipment, companyValues } from "@/lib/team-data";
import { site } from "@/lib/site";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 20 },
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        kicker="Independent Austin Automotive"
        title="Redefining Auto Repair Through Radical Transparency"
        description="Founded in 2011, Apex Auto Care was born out of a simple frustration: dealerships and chain shops making drivers feel anxious, misled, and overcharged."
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/appointment">
            Schedule a Visit
          </ButtonLink>
          <ButtonLink href="/reviews" variant="secondary">
            Read Driver Reviews
          </ButtonLink>
        </div>
      </PageHero>

      {/* Origin Story */}
      <section className="border-b border-white/8 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="Our Heritage & Philosophy"
                title="A Workshop Built for Car Lovers & Daily Commuters"
              />
              <div className="mt-6 space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  In 2011, Marcus Sterling left his position as a lead shop foreman at a luxury German dealership in Austin. He was tired of high quotas, rushed mechanics, and service advisors pushing unnecessary flushes on unsuspecting drivers.
                </p>
                <p>
                  He leased a three-bay garage on South Congress with one mission: combine the precision tooling and master-level diagnostics of top factory dealerships with the warmth, honesty, and fair pricing of an independent family garage.
                </p>
                <p>
                  Today, Apex Auto Care has grown into an 8-bay modern repair facility with specialized master technicians for domestic trucks, European sports cars, Asian hybrids, and electric vehicles. We send digital video inspections with every service so you always stay in complete control.
                </p>
              </div>

              {/* 3 Pillar highlights */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/8 bg-secondary/40 p-4">
                  <span className="text-2xl font-black text-foreground">15+</span>
                  <p className="mt-1 text-xs text-muted">
                    Years Serving South Congress & Greater Austin
                  </p>
                </div>
                <div className="rounded-xl border border-white/8 bg-secondary/40 p-4">
                  <span className="text-2xl font-black text-accent">100%</span>
                  <p className="mt-1 text-xs text-muted">
                    Digital Photo & Video SMS Inspections
                  </p>
                </div>
                <div className="rounded-xl border border-white/8 bg-secondary/40 p-4">
                  <span className="text-2xl font-black text-foreground">30k+</span>
                  <p className="mt-1 text-xs text-muted">
                    Vehicles Safely Serviced & Back on Texas Roads
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: The 4 Guarantees */}
            <div className="rounded-2xl border border-white/8 bg-secondary/60 p-8 lg:col-span-5">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                <ShieldCheck className="size-4" />
                The Apex Standard
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-foreground">
                Our 4 Non-Negotiable Promises
              </h3>

              <div className="mt-6 space-y-5">
                {companyValues.map((val) => (
                  <div key={val.number} className="flex items-start gap-3.5">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent/10 font-mono text-xs font-bold text-accent">
                      {val.number}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">
                        {val.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Technicians Team */}
      <section className="border-b border-white/8 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            align="center"
            kicker="Master Craftsmen"
            title="Meet the Certified Mechanics Behind Apex"
            description="Our technicians aren't part-time lube techs. Every team member is a career automotive professional with extensive ASE credentials and continuous manufacturer training."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.id}
                {...fadeUp(idx * 0.1)}
                className="flex flex-col justify-between rounded-xl border border-white/8 bg-secondary/60 p-7 transition-all hover:border-white/20"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/8 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-accent">
                        {member.role}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted">
                      {member.experience}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Specialties:
                    </span>
                    <p className="mt-1 text-xs font-semibold text-foreground">
                      {member.specialties}
                    </p>
                  </div>

                  <p className="mt-3 text-xs text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/6 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    Certifications:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {member.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="rounded border border-accent/20 bg-accent/5 px-2 py-0.5 text-[10px] font-semibold text-accent"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & Diagnostic Equipment */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            align="center"
            kicker="Our Workshop Technology"
            title="State-of-the-Art Tooling & Diagnostics"
            description="We invest heavily in the finest optical alignment systems, bi-directional diagnostic computers, and clean-air equipment in Central Texas."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shopEquipment.map((eq, idx) => (
              <motion.div
                key={eq.name}
                {...fadeUp(idx * 0.1)}
                className="flex flex-col justify-between rounded-xl border border-white/8 bg-secondary/40 p-6 transition-all hover:border-accent/40"
              >
                <div>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                    {eq.category}
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-foreground">
                    {eq.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {eq.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-foreground/80">
                  <CheckCircle2 className="size-3.5 text-accent" />
                  OEM Factory Calibrated
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lounge callout */}
          <div className="mt-14 rounded-2xl border border-white/8 bg-secondary/50 p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Complimentary Customer Amenities
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-foreground sm:text-2xl">
                  Work Productively While We Service Your Car
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed sm:text-sm">
                  Enjoy our modern climate-controlled lounge featuring gigabit Wi-Fi, private sit-stand work desks, complimentary Austin artisan espresso & cold brew, and clean courtesy loaner vehicles.
                </p>
              </div>
              <ButtonLink href="/appointment" className="shrink-0">
                Book Service Bay
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
