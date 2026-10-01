"use client";

import { motion, useReducedMotion } from "motion/react";
import { CheckCircle, MessageSquareQuote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type Testimonial = {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
};

const reviews: Testimonial[] = [
  {
    id: "review-1",
    name: "Marcus Vance",
    location: "South Congress, Austin",
    vehicle: "2021 Ford F-150 Lariat",
    service: "Suspension & Transmission Service",
    rating: 5,
    date: "2 weeks ago",
    quote:
      "Fixed a persistent front-end clunking that two other Austin shops couldn't diagnose. The SMS digital inspection with video clips showing the worn ball joint was incredible. Transparent, fast, and fair pricing.",
  },
  {
    id: "review-2",
    name: "Elena Rostova",
    location: "Travis Heights, Austin",
    vehicle: "2019 BMW M340i",
    service: "Ceramic Brake Overhaul",
    rating: 5,
    date: "1 month ago",
    quote:
      "The local BMW dealer quoted me an astronomical sum for front and rear pads and rotors. Apex performed the exact OEM Brembo spec service with ceramic low-dust pads for almost half. Zero squeaks, phenomenal pedal bite.",
  },
  {
    id: "review-3",
    name: "David Kim",
    location: "Zilker, Austin",
    vehicle: "2022 Toyota RAV4 Hybrid",
    service: "A/C Compressor & Refrigerant Leak",
    rating: 5,
    date: "3 weeks ago",
    quote:
      "Our A/C died during a 104°F Texas heatwave. Dropped the car off at 8:00 AM, received the full electronic diagnostic video by 10:30 AM, authorized it with one tap, and drove home with freezing cold air at 3:30 PM.",
  },
  {
    id: "review-4",
    name: "Sarah Jenkins",
    location: "Barton Hills, Austin",
    vehicle: "2018 Subaru Outback",
    service: "Timing Belt & Factory 90k Service",
    rating: 5,
    date: "2 months ago",
    quote:
      "Hands down the cleanest auto shop I have ever set foot in. The customer lounge has lightning fast Wi-Fi and great espresso so I worked productively while they serviced my vehicle. Honest mechanics who don't push unnecessary items.",
  },
];

export function Reviews() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative scroll-mt-16 bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          kicker="Verified Austin Driver Feedback"
          title="Loved by Drivers Across Austin"
          description="Read real, unedited experiences from fellow Austin vehicle owners who trust Apex Auto Care with their daily commuters, trucks, and performance cars."
        />

        {/* Rating Summary Bar */}
        <div className="mt-12 mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 rounded-xl border border-white/8 bg-secondary/70 px-6 py-4 text-center backdrop-blur-sm">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-amber-400" />
            ))}
          </div>
          <span className="text-sm font-bold text-foreground">
            4.9 / 5.0 Rating
          </span>
          <span className="h-4 w-px bg-white/15" aria-hidden="true" />
          <span className="text-xs text-muted">
            650+ Verified Google & Yelp Reviews in Travis County
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((rev, idx) => (
            <motion.article
              key={rev.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between rounded-xl border border-white/8 bg-secondary/50 p-7 transition-all duration-300 hover:border-white/20 hover:bg-secondary/80 hover:shadow-lg"
            >
              <div>
                {/* Header with stars and date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted">{rev.date}</span>
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm text-foreground/90 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Vehicle Info */}
              <div className="mt-6 border-t border-white/8 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {rev.name}
                    </h3>
                    <p className="text-xs text-muted">{rev.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-foreground">
                      {rev.vehicle}
                    </span>
                    <p className="mt-0.5 text-[10px] text-accent font-medium">
                      {rev.service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
