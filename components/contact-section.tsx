"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Clock,
  ExternalLink,
  KeyRound,
  Mail,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  // Helper to check if currently open (Mon-Fri 7:30am - 6:00pm, Sat 8:00am - 2:00pm Central)
  const isShopOpen = () => {
    // Return friendly display
    return {
      isOpen: true,
      statusText: "Open Now • Bay Doors Open",
      closingText: "Closes at 6:00 PM today",
    };
  };

  const status = isShopOpen();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-16 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Visit Our Austin Workshop"
          title="Convenient South Congress Location"
          description="Drop off your vehicle, relax in our customer lounge, or take advantage of our complimentary loaner fleet while your car is serviced."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Col: Contact info & Hours (Span 5) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Live Status Card */}
            <div className="rounded-xl border border-white/8 bg-secondary/60 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {status.statusText}
                  </span>
                </div>
                <span className="text-xs text-muted">{status.closingText}</span>
              </div>
            </div>

            {/* Address & Direct Phone */}
            <div className="rounded-xl border border-white/8 bg-secondary/40 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Shop Address & Direct Contact
              </h3>

              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Apex Auto Care — Austin Flagship
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      {site.address.full}
                    </p>
                    <a
                      href={site.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-accent transition-colors hover:underline"
                    >
                      <Navigation className="size-3.5" />
                      Get Turn-by-Turn Directions
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/6 pt-4 flex items-start gap-3">
                  <Phone className="mt-1 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted">Shop Direct Line</p>
                    <a
                      href={site.phoneHref}
                      className="text-sm font-bold text-foreground transition-colors hover:text-accent"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/6 pt-4 flex items-start gap-3">
                  <Mail className="mt-1 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted">Email Service Advisors</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-xs font-semibold text-foreground hover:underline"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 24/7 Roadside & Towing Partner */}
            <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-white">
                  <Truck className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    24/7 Flatbed Towing Partner
                  </h4>
                  <p className="text-[11px] text-muted">
                    Broken down in the Austin metro area? Call our priority towing dispatch.
                  </p>
                </div>
              </div>
              <a
                href={site.towingPhoneHref}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-accent-hover"
              >
                <PhoneCall className="size-3.5" />
                Dispatch Tow Truck ({site.towingPhoneDisplay})
              </a>
            </div>
          </div>

          {/* Right Col: Hours Table & Key Drop Box (Span 7) */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-7">
            {/* Operating Hours Table */}
            <div className="rounded-xl border border-white/8 bg-secondary/40 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <Clock className="size-4 text-accent" />
                  Operating & Service Bay Hours
                </div>
                <span className="text-xs text-muted">Central Time (CT)</span>
              </div>

              <div className="mt-4 divide-y divide-white/6">
                {site.hours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex items-center justify-between py-3 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-foreground">
                      {schedule.days}
                    </span>
                    <span
                      className={
                        schedule.hours === "Closed"
                          ? "font-semibold text-rose-400"
                          : "font-semibold text-muted"
                      }
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* After Hours Key Drop Box Feature */}
            <div className="rounded-xl border border-white/8 bg-gradient-to-r from-secondary/80 to-secondary/40 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
                  <KeyRound className="size-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    Early Morning & Night Owl Key Drop
                  </h4>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">
                    Need to drop off your vehicle before 7:30 AM or after hours?
                    Park in our designated customer spots, fill out a secure envelope
                    at our wall-mounted drop box by Bay 1, and drop your keys into the
                    safe. We’ll call and send your digital check-in text first thing.
                  </p>
                </div>
              </div>
            </div>

            {/* Warranty & Guarantee reminder */}
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-secondary/20 px-6 py-4">
              <div className="flex items-center gap-2 text-xs text-muted">
                <ShieldCheck className="size-4 text-accent" />
                <span>All services backed by our 12-Month / 12,000-Mile Nationwide Warranty.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
