"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Check, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";

const trustItems = [
  "ASE Certified Technicians",
  "12-Month Warranty",
  "Same-Day Service Available",
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-svh overflow-hidden bg-background"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero-workshop.jpg"
          alt="Technician working under the hood of a vehicle in a clean, modern Apex Auto Care workshop"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-[78%_42%] sm:object-[74%_40%] lg:object-[70%_center]"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/82 to-background/20 sm:via-background/75 lg:via-background/62 lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent lg:via-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:justify-center sm:pb-16 sm:pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-xl lg:max-w-[36rem]">
          <motion.p
            className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-muted sm:text-xs"
            {...fadeUp(0.12)}
          >
            <span className="h-px w-7 bg-accent" aria-hidden="true" />
            TRUSTED AUTO REPAIR IN AUSTIN, TX
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="text-[2.05rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-foreground min-[375px]:text-[2.35rem] sm:text-5xl lg:text-[4.15rem]"
            {...fadeUp(0.2)}
          >
            KEEP YOUR CAR
            <br />
            RUNNING LIKE NEW.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-base lg:text-lg"
            {...fadeUp(0.3)}
          >
            Reliable repairs, honest pricing, and experienced technicians —
            without the runaround.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center"
            {...fadeUp(0.4)}
          >
            <ButtonLink href={site.bookingHref} className="w-full sm:w-auto">
              Book an Appointment
            </ButtonLink>
            <ButtonLink
              href={site.phoneHref}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Phone className="mr-2 size-4" aria-hidden="true" />
              Call {site.phoneDisplay}
            </ButtonLink>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-2"
            {...fadeUp(0.5)}
          >
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Check
                  className="size-4 shrink-0 text-accent"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
