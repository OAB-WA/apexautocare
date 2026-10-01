"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  KeyRound,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  PhoneCall,
  Send,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    serviceNeeded: "Diagnostics / Inspection",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact & Location" }]}
        kicker="Austin Auto Repair Center"
        title="We’re Located on South Congress in Austin, TX"
        description="Have questions about a check engine light, need a competitive quote, or want to drop off your vehicle after hours? Get in touch with our team."
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/appointment">
            Reserve Service Bay
          </ButtonLink>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-white/40 hover:bg-white/10"
          >
            <Navigation className="mr-2 size-4 text-accent" />
            Open in Google Maps
          </a>
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Col: Shop Info, Hours, Towing (Span 5) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Live Open Status */}
            <div className="rounded-xl border border-white/8 bg-secondary/60 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    Open Today • Bay Doors Open
                  </span>
                </div>
                <span className="text-xs text-muted">Closes at 6:00 PM</span>
              </div>
            </div>

            {/* Address & Direct Phone Card */}
            <div className="rounded-2xl border border-white/8 bg-secondary/40 p-6 sm:p-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Workshop Location
              </h3>

              <div className="mt-4 space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Apex Auto Care Flagship
                    </p>
                    <p className="text-muted leading-relaxed">
                      {site.address.full}
                    </p>
                    <p className="mt-1 text-[11px] text-muted">
                      (Located 2 blocks south of Ben White Blvd / Hwy 71 on S Congress)
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/6 pt-4 flex items-start gap-3">
                  <Phone className="mt-1 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-muted">Shop Direct Desk</p>
                    <a
                      href={site.phoneHref}
                      className="text-sm font-bold text-foreground hover:text-accent"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/6 pt-4 flex items-start gap-3">
                  <Mail className="mt-1 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-muted">Service Advisors Email</p>
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

            {/* Operating Hours Table */}
            <div className="rounded-2xl border border-white/8 bg-secondary/40 p-6">
              <div className="flex items-center gap-2 border-b border-white/8 pb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                <Clock className="size-4 text-accent" />
                Service Bay Operating Schedule
              </div>
              <div className="mt-3 divide-y divide-white/6">
                {site.hours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex items-center justify-between py-2.5 text-xs"
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

            {/* Emergency Towing Partner */}
            <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-white">
                  <Truck className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    24/7 Austin Towing Dispatch
                  </h4>
                  <p className="text-[11px] text-muted">
                    Flatbed emergency towing direct to our secure bay facility.
                  </p>
                </div>
              </div>
              <a
                href={site.towingPhoneHref}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-xs font-bold text-white hover:bg-accent-hover"
              >
                <PhoneCall className="size-4" />
                Call Tow Dispatch: {site.towingPhoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Col: Inquiry / Quote Form & Key Drop Guide (Span 7) */}
          <div className="space-y-8 lg:col-span-7">
            {/* Inquiry Form */}
            <div className="rounded-2xl border border-white/8 bg-secondary/50 p-7 sm:p-9">
              <h3 className="text-xl font-bold text-foreground">
                Send a Message or Request a Quote
              </h3>
              <p className="mt-1 text-xs text-muted">
                Our service advisors respond to all online inquiries within 30 minutes during shop hours.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                  <CheckCircle2 className="mx-auto size-10 text-emerald-400" />
                  <h4 className="mt-3 text-base font-bold text-foreground">
                    Message Received!
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    Thank you {inquiryData.name}. One of our service advisors will contact you shortly at {inquiryData.phone || inquiryData.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setInquiryData({
                        name: "",
                        email: "",
                        phone: "",
                        vehicle: "",
                        serviceNeeded: "Diagnostics / Inspection",
                        message: "",
                      });
                    }}
                    className="mt-4 rounded-md bg-white/10 px-4 py-2 text-xs font-semibold text-foreground hover:bg-white/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inq-name"
                        className="block text-xs font-medium text-muted"
                      >
                        Your Name *
                      </label>
                      <input
                        id="inq-name"
                        type="text"
                        required
                        placeholder="Jordan Casey"
                        value={inquiryData.name}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, name: e.target.value })
                        }
                        className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inq-phone"
                        className="block text-xs font-medium text-muted"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="inq-phone"
                        type="tel"
                        required
                        placeholder="(512) 000-0000"
                        value={inquiryData.phone}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, phone: e.target.value })
                        }
                        className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inq-email"
                        className="block text-xs font-medium text-muted"
                      >
                        Email Address *
                      </label>
                      <input
                        id="inq-email"
                        type="email"
                        required
                        placeholder="jordan@example.com"
                        value={inquiryData.email}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, email: e.target.value })
                        }
                        className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inq-vehicle"
                        className="block text-xs font-medium text-muted"
                      >
                        Vehicle (Year, Make, Model)
                      </label>
                      <input
                        id="inq-vehicle"
                        type="text"
                        placeholder="e.g. 2020 Toyota Tacoma"
                        value={inquiryData.vehicle}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, vehicle: e.target.value })
                        }
                        className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inq-msg"
                      className="block text-xs font-medium text-muted"
                    >
                      How Can We Help? (Describe symptoms, warning lights, or requested service) *
                    </label>
                    <textarea
                      id="inq-msg"
                      required
                      rows={3}
                      placeholder="Please let us know what issues your car is experiencing..."
                      value={inquiryData.message}
                      onChange={(e) =>
                        setInquiryData({ ...inquiryData, message: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-xs font-bold text-white transition-all hover:bg-accent-hover disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Submit Inquiry"}
                    <Send className="ml-2 size-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* After-Hours Key Drop Box Visual Walkthrough */}
            <div className="rounded-2xl border border-white/8 bg-secondary/40 p-7">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
                  <KeyRound className="size-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    24/7 Early Bird & Night Owl Key Drop Guide
                  </h4>
                  <p className="text-xs text-muted">
                    Drop your car off any time, 24 hours a day, 7 days a week.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
                <div className="rounded-lg border border-white/6 bg-background/50 p-4">
                  <span className="font-mono text-accent font-bold">Step 1</span>
                  <p className="mt-1 text-foreground font-semibold">Park Vehicle</p>
                  <p className="mt-1 text-[11px] text-muted">
                    Park in customer spots directly in front of Service Bay 1 and lock your vehicle.
                  </p>
                </div>

                <div className="rounded-lg border border-white/6 bg-background/50 p-4">
                  <span className="font-mono text-accent font-bold">Step 2</span>
                  <p className="mt-1 text-foreground font-semibold">Fill Envelope</p>
                  <p className="mt-1 text-[11px] text-muted">
                    Take an envelope from the dispenser on our key drop box and note your name & phone.
                  </p>
                </div>

                <div className="rounded-lg border border-white/6 bg-background/50 p-4">
                  <span className="font-mono text-accent font-bold">Step 3</span>
                  <p className="mt-1 text-foreground font-semibold">Drop & Go</p>
                  <p className="mt-1 text-[11px] text-muted">
                    Place keys inside and slide envelope into the secure safe slot. We will text you at 7:30 AM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
