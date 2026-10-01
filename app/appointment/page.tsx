"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  Download,
  Info,
  KeyRound,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/cn";

const serviceOptions = [
  { id: "diagnostics", label: "Check Engine & Diagnostics", est: "Same-Day" },
  { id: "brakes", label: "Brake Pads & Rotor Replacement", est: "2 - 4 Hours" },
  { id: "oil", label: "Full Synthetic Oil & Filter Service", est: "45 - 60 Min" },
  { id: "ac", label: "A/C Recharge & Climate Control", est: "Same-Day" },
  { id: "suspension", label: "Suspension, Steering & Alignment", est: "Same-Day" },
  { id: "scheduled", label: "Factory 30k/60k/90k Service", est: "2 - 3 Hours" },
  { id: "engine", label: "Engine / Transmission Repair", est: "1 - 3 Days" },
  { id: "other", label: "Multi-Point Inspection / Other Issue", est: "Same-Day" },
];

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    year: "2022",
    make: "",
    model: "",
    mileage: "",
    services: ["diagnostics"],
    preferredDate: "",
    timeSlot: "morning",
    transportation: "lounge",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const reduceMotion = useReducedMotion();

  const toggleService = (id: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(id);
      if (exists) {
        if (prev.services.length === 1) return prev;
        return { ...prev, services: prev.services.filter((s) => s !== id) };
      }
      return { ...prev, services: [...prev.services, id] };
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const code = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingCode(code);
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      year: "2022",
      make: "",
      model: "",
      mileage: "",
      services: ["diagnostics"],
      preferredDate: "",
      timeSlot: "morning",
      transportation: "lounge",
      fullName: "",
      phone: "",
      email: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Schedule Appointment" }]}
        kicker="Instant Service Bay Reservation"
        title="Schedule Your Apex Auto Care Visit"
        description="Book your appointment in under 2 minutes. We will prepare your service bay, reserve a loaner vehicle if requested, and send instant SMS updates."
      />

      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        {submitted ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-emerald-500/30 bg-secondary/80 p-8 sm:p-12 text-center backdrop-blur-md"
          >
            <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="size-8" />
            </div>

            <span className="mt-6 inline-block rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-bold text-emerald-400">
              Bay Reservation Confirmed
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              We Look Forward to Servicing Your Vehicle
            </h2>

            {/* Digital Service Pass Card */}
            <div className="mx-auto mt-8 max-w-lg rounded-xl border border-white/10 bg-background/90 p-6 text-left text-xs shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    Reservation Pass
                  </span>
                  <p className="font-mono text-base font-bold text-accent">
                    {bookingCode}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-muted">Customer:</span>
                  <p className="font-bold text-foreground">{formData.fullName}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-muted">Vehicle:</span>
                  <span className="font-semibold text-foreground">
                    {formData.year} {formData.make} {formData.model}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Date & Window:</span>
                  <span className="font-semibold text-foreground capitalize">
                    {formData.preferredDate || "Earliest Slot"} (
                    {formData.timeSlot === "morning"
                      ? "7:30 AM - 12:00 PM"
                      : "12:00 PM - 5:00 PM"}
                    )
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Transportation:</span>
                  <span className="font-semibold text-foreground capitalize">
                    {formData.transportation === "lounge"
                      ? "Customer Lounge / Wi-Fi"
                      : formData.transportation === "loaner"
                      ? "Courtesy Loaner Reserved"
                      : formData.transportation === "shuttle"
                      ? "Local Shuttle Service"
                      : "After-Hours Key Drop Box"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-white/6 pt-2.5">
                  <span className="text-muted">Shop Location:</span>
                  <span className="font-semibold text-foreground text-right">
                    {site.address.full}
                  </span>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-md text-xs text-muted leading-relaxed">
              We have sent a text confirmation to{" "}
              <strong className="text-foreground">
                {formData.phone || site.phoneDisplay}
              </strong>
              . When you arrive at our South Congress location, simply pull up to Bay 1.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={resetForm}
                className="rounded-md border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-foreground hover:bg-white/10"
              >
                Book Another Vehicle
              </button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-xs font-bold text-white hover:bg-accent-hover"
              >
                <Phone className="mr-2 size-3.5" />
                Call Shop ({site.phoneDisplay})
              </a>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleBookingSubmit}
            className="rounded-2xl border border-white/8 bg-secondary/60 p-6 sm:p-10 shadow-2xl backdrop-blur-md"
          >
            {/* Step 1: Vehicle Information */}
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                <Car className="size-4" />
                Step 1: Vehicle Information
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
                <div>
                  <label
                    htmlFor="book-year"
                    className="block text-xs font-medium text-muted"
                  >
                    Year *
                  </label>
                  <select
                    id="book-year"
                    required
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground focus:border-accent focus:outline-none"
                  >
                    {Array.from({ length: 30 }, (_, i) => 2026 - i).map((yr) => (
                      <option key={yr} value={yr} className="bg-secondary text-foreground">
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="book-make"
                    className="block text-xs font-medium text-muted"
                  >
                    Make *
                  </label>
                  <input
                    id="book-make"
                    type="text"
                    required
                    placeholder="e.g. Ford, BMW, Toyota"
                    value={formData.make}
                    onChange={(e) =>
                      setFormData({ ...formData, make: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="book-model"
                    className="block text-xs font-medium text-muted"
                  >
                    Model *
                  </label>
                  <input
                    id="book-model"
                    type="text"
                    required
                    placeholder="e.g. F-150, 330i, RAV4"
                    value={formData.model}
                    onChange={(e) =>
                      setFormData({ ...formData, model: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="book-mileage"
                    className="block text-xs font-medium text-muted"
                  >
                    Mileage (Optional)
                  </label>
                  <input
                    id="book-mileage"
                    type="text"
                    placeholder="e.g. 52,000"
                    value={formData.mileage}
                    onChange={(e) =>
                      setFormData({ ...formData, mileage: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Service Selection */}
            <div className="mt-8 border-t border-white/8 pt-8">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                <Wrench className="size-4" />
                Step 2: Service(s) Requested
              </div>
              <p className="mt-1 text-xs text-muted">
                Select one or more services. All vehicles receive our 40-point digital inspection.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {serviceOptions.map((svc) => {
                  const isChecked = formData.services.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => toggleService(svc.id)}
                      className={cn(
                        "flex flex-col justify-between rounded-lg border p-3 text-left transition-all",
                        isChecked
                          ? "border-accent bg-accent/15 text-foreground"
                          : "border-white/8 bg-background/50 text-muted hover:border-white/20 hover:text-foreground",
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold">{svc.label}</span>
                        <span
                          className={cn(
                            "flex size-3.5 shrink-0 items-center justify-center rounded border",
                            isChecked
                              ? "border-accent bg-accent text-white"
                              : "border-white/20",
                          )}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="size-2.5 stroke-[3]" />
                          ) : null}
                        </span>
                      </div>
                      <span className="mt-2 text-[10px] text-muted">
                        Est: {svc.est}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Date & Transportation */}
            <div className="mt-8 border-t border-white/8 pt-8">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                <Calendar className="size-4" />
                Step 3: Date, Time & Logistics
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="book-date"
                    className="block text-xs font-medium text-muted"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="book-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredDate: e.target.value,
                      })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="book-time"
                    className="block text-xs font-medium text-muted"
                  >
                    Preferred Window
                  </label>
                  <select
                    id="book-time"
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground focus:border-accent focus:outline-none"
                  >
                    <option value="morning" className="bg-secondary text-foreground">
                      Morning (7:30 AM - 12:00 PM)
                    </option>
                    <option value="afternoon" className="bg-secondary text-foreground">
                      Afternoon (12:00 PM - 5:00 PM)
                    </option>
                    <option value="first-available" className="bg-secondary text-foreground">
                      First Available Slot
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="book-trans"
                    className="block text-xs font-medium text-muted"
                  >
                    Transportation Preference
                  </label>
                  <select
                    id="book-trans"
                    value={formData.transportation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        transportation: e.target.value,
                      })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground focus:border-accent focus:outline-none"
                  >
                    <option value="lounge" className="bg-secondary text-foreground">
                      Wait in Executive Lounge
                    </option>
                    <option value="loaner" className="bg-secondary text-foreground">
                      Request Courtesy Loaner Car
                    </option>
                    <option value="shuttle" className="bg-secondary text-foreground">
                      Request Local Shuttle Ride
                    </option>
                    <option value="keybox" className="bg-secondary text-foreground">
                      After-Hours Key Drop Box
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Contact Details */}
            <div className="mt-8 border-t border-white/8 pt-8">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                <User className="size-4" />
                Step 4: Contact Details & Symptom Notes
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="book-name"
                    className="block text-xs font-medium text-muted"
                  >
                    Full Name *
                  </label>
                  <input
                    id="book-name"
                    type="text"
                    required
                    placeholder="Morgan Lee"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="book-phone"
                    className="block text-xs font-medium text-muted"
                  >
                    Mobile Phone (for SMS Inspection) *
                  </label>
                  <input
                    id="book-phone"
                    type="tel"
                    required
                    placeholder="(512) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="book-email"
                    className="block text-xs font-medium text-muted"
                  >
                    Email Address *
                  </label>
                  <input
                    id="book-email"
                    type="email"
                    required
                    placeholder="morgan@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="book-notes"
                  className="block text-xs font-medium text-muted"
                >
                  Specific symptoms, strange noises, or questions (Optional)
                </label>
                <textarea
                  id="book-notes"
                  rows={2}
                  placeholder="e.g. Brake warning light came on yesterday, slight vibration when slowing down from 60mph."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="mt-1 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
              <div className="flex items-center gap-2 text-xs text-muted">
                <ShieldCheck className="size-4 text-accent" />
                No credit card required. 100% price lock guarantee on approved quotes.
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-xs font-bold text-white transition-all hover:bg-accent-hover disabled:opacity-50"
              >
                {submitting ? "Reserving Bay..." : "Confirm & Reserve Bay"}
                <Send className="ml-2 size-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
}
