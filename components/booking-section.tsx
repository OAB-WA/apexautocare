"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  KeyRound,
  Phone,
  Send,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const serviceOptions = [
  { id: "diagnostics", label: "Check Engine & Diagnostics" },
  { id: "brakes", label: "Brake Service & Pad Replacement" },
  { id: "oil", label: "Full Synthetic Oil & Filter Service" },
  { id: "ac", label: "A/C Recharge & Climate Control" },
  { id: "suspension", label: "Suspension, Steering & Alignment" },
  { id: "scheduled", label: "Factory 30k/60k/90k Service" },
  { id: "other", label: "General Inspection / Other Issue" },
];

export function BookingSection() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    year: "2021",
    make: "",
    model: "",
    mileage: "",
    services: ["diagnostics"],
    preferredDate: "",
    timeSlot: "morning",
    dropOffType: "dropoff",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const toggleService = (id: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(id);
      if (exists) {
        if (prev.services.length === 1) return prev; // keep at least 1
        return { ...prev, services: prev.services.filter((s) => s !== id) };
      }
      return { ...prev, services: [...prev.services, id] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate booking API call
    setTimeout(() => {
      const code = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(code);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      year: "2021",
      make: "",
      model: "",
      mileage: "",
      services: ["diagnostics"],
      preferredDate: "",
      timeSlot: "morning",
      dropOffType: "dropoff",
      fullName: "",
      phone: "",
      email: "",
      notes: "",
    });
  };

  return (
    <section
      id="appointment"
      aria-labelledby="booking-heading"
      className="relative scroll-mt-16 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          kicker="Schedule Fast Service"
          title="Book Your Appointment in Minutes"
          description="Select your vehicle details and preferred time. We will reserve your bay, confirm via SMS, and have a loaner or technician ready."
        />

        <div className="mt-14 mx-auto max-w-4xl">
          {submitted ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-emerald-500/30 bg-secondary/80 p-8 text-center backdrop-blur-md sm:p-12"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="size-8" />
              </div>

              <span className="mt-6 inline-block rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
                Appointment Requested • Confirmed
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-foreground sm:text-3xl">
                You're All Set for Apex Service
              </h3>

              <div className="mx-auto mt-6 max-w-md rounded-xl border border-white/8 bg-background/80 p-5 text-left text-xs">
                <div className="flex justify-between border-b border-white/8 pb-3">
                  <span className="text-muted">Confirmation Code:</span>
                  <span className="font-mono font-bold text-accent">
                    {confirmationCode}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/8 py-3">
                  <span className="text-muted">Vehicle:</span>
                  <span className="font-semibold text-foreground">
                    {formData.year} {formData.make} {formData.model}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/8 py-3">
                  <span className="text-muted">Arrival Window:</span>
                  <span className="font-semibold text-foreground capitalize">
                    {formData.preferredDate || "Earliest Available"} (
                    {formData.timeSlot === "morning"
                      ? "7:30 AM - 12:00 PM"
                      : "12:00 PM - 5:00 PM"}
                    )
                  </span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-muted">Location:</span>
                  <span className="font-semibold text-foreground text-right">
                    {site.address.full}
                  </span>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-md text-xs text-muted leading-relaxed">
                A confirmation SMS has been sent to{" "}
                <strong className="text-foreground">
                  {formData.phone || site.phoneDisplay}
                </strong>
                . If you need same-day emergency towing or have questions, call us
                directly at {site.phoneDisplay}.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-md border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-white/10"
                >
                  Book Another Vehicle
                </button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  <Phone className="mr-2 size-3.5" />
                  Call Shop ({site.phoneDisplay})
                </a>
              </div>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/8 bg-secondary/60 p-6 sm:p-10 shadow-2xl backdrop-blur-md"
            >
              {/* Step 1: Vehicle Information */}
              <div>
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                  <Car className="size-4" />
                  Step 1: Vehicle Details
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
                  <div>
                    <label
                      htmlFor="vehicle-year"
                      className="block text-xs font-medium text-muted"
                    >
                      Year *
                    </label>
                    <select
                      id="vehicle-year"
                      required
                      value={formData.year}
                      onChange={(e) =>
                        setFormData({ ...formData, year: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
                    >
                      {Array.from({ length: 30 }, (_, i) => 2026 - i).map(
                        (yr) => (
                          <option key={yr} value={yr} className="bg-secondary text-foreground">
                            {yr}
                          </option>
                        ),
                      )}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="vehicle-make"
                      className="block text-xs font-medium text-muted"
                    >
                      Make *
                    </label>
                    <input
                      id="vehicle-make"
                      type="text"
                      required
                      placeholder="e.g. Ford, Toyota, BMW"
                      value={formData.make}
                      onChange={(e) =>
                        setFormData({ ...formData, make: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vehicle-model"
                      className="block text-xs font-medium text-muted"
                    >
                      Model *
                    </label>
                    <input
                      id="vehicle-model"
                      type="text"
                      required
                      placeholder="e.g. F-150, Camry, 330i"
                      value={formData.model}
                      onChange={(e) =>
                        setFormData({ ...formData, model: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vehicle-mileage"
                      className="block text-xs font-medium text-muted"
                    >
                      Estimated Mileage
                    </label>
                    <input
                      id="vehicle-mileage"
                      type="text"
                      placeholder="e.g. 45,000"
                      value={formData.mileage}
                      onChange={(e) =>
                        setFormData({ ...formData, mileage: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Select Services */}
              <div className="mt-8 border-t border-white/8 pt-8">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                  <Wrench className="size-4" />
                  Step 2: Service(s) Needed
                </div>
                <p className="mt-1 text-xs text-muted">
                  Select all that apply. We will perform a multi-point check on all requested areas.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceOptions.map((svc) => {
                    const isChecked = formData.services.includes(svc.id);
                    return (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => toggleService(svc.id)}
                        className={cn(
                          "flex items-center gap-2.5 rounded-lg border p-3 text-left text-xs font-medium transition-all duration-200",
                          isChecked
                            ? "border-accent bg-accent/15 text-foreground"
                            : "border-white/8 bg-background/50 text-muted hover:border-white/20 hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-4 shrink-0 items-center justify-center rounded border",
                            isChecked
                              ? "border-accent bg-accent text-white"
                              : "border-white/20 bg-transparent",
                          )}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="size-3 stroke-[3]" />
                          ) : null}
                        </span>
                        <span>{svc.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Date, Time & Logistics */}
              <div className="mt-8 border-t border-white/8 pt-8">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                  <Calendar className="size-4" />
                  Step 3: Date & Preferred Timing
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-xs font-medium text-muted"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="preferred-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDate: e.target.value,
                        })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-time"
                      className="block text-xs font-medium text-muted"
                    >
                      Time Window
                    </label>
                    <select
                      id="preferred-time"
                      value={formData.timeSlot}
                      onChange={(e) =>
                        setFormData({ ...formData, timeSlot: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
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
                      htmlFor="dropoff-option"
                      className="block text-xs font-medium text-muted"
                    >
                      Drop-off Preference
                    </label>
                    <select
                      id="dropoff-option"
                      value={formData.dropOffType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropOffType: e.target.value,
                        })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
                    >
                      <option value="dropoff" className="bg-secondary text-foreground">
                        Standard Drop-off
                      </option>
                      <option value="waiting" className="bg-secondary text-foreground">
                        Wait in Customer Lounge
                      </option>
                      <option value="loaner" className="bg-secondary text-foreground">
                        Need Courtesy Loaner / Shuttle
                      </option>
                      <option value="keybox" className="bg-secondary text-foreground">
                        After-Hours Key Drop Box
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Info */}
              <div className="mt-8 border-t border-white/8 pt-8">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                  <User className="size-4" />
                  Step 4: Contact & Notes
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="customer-name"
                      className="block text-xs font-medium text-muted"
                    >
                      Full Name *
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      required
                      placeholder="Alex Taylor"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="customer-phone"
                      className="block text-xs font-medium text-muted"
                    >
                      Mobile Phone (for SMS updates) *
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      required
                      placeholder="(512) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="customer-email"
                      className="block text-xs font-medium text-muted"
                    >
                      Email Address *
                    </label>
                    <input
                      id="customer-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="customer-notes"
                    className="block text-xs font-medium text-muted"
                  >
                    Describe any noises, symptoms, or special instructions (Optional)
                  </label>
                  <textarea
                    id="customer-notes"
                    rows={2}
                    placeholder="e.g. Squeaking noise when braking at low speeds, or check engine light started flashing yesterday."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Action */}
              <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <ShieldCheck className="size-4 text-accent" />
                  Your information is strictly protected. Zero spam.
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:bg-accent-hover hover:-translate-y-px disabled:opacity-50"
                >
                  {submitting ? (
                    "Reserving Bay..."
                  ) : (
                    <>
                      <Send className="mr-2 size-4" />
                      Confirm & Request Bay
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
