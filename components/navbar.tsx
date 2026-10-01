"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { ButtonLink } from "@/components/ui/button-link";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const menuId = useId();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled || open
            ? "border-white/8 bg-background/80 backdrop-blur-md"
            : "border-transparent bg-gradient-to-b from-background/70 to-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:h-[4.25rem] lg:px-8">
          <Wordmark />

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[13px] font-medium tracking-wide transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
            >
              <Phone className="size-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <ButtonLink href={site.bookingHref} className="px-4 py-2.5 text-[13px]">
              Book an Appointment
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ButtonLink
              href={site.bookingHref}
              className="px-3 py-2 text-xs sm:px-4 sm:text-[13px]"
            >
              Book
              <span className="sr-only"> an Appointment</span>
            </ButtonLink>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-white/5"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 top-16 z-30 bg-black/45 lg:hidden"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
            id={menuId}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/8 bg-background/95 backdrop-blur-md lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-white/6 py-3.5 text-base font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center gap-2 py-2 text-sm font-medium text-muted"
                onClick={() => setOpen(false)}
              >
                <Phone className="size-4 text-accent" aria-hidden="true" />
                Call {site.phoneDisplay}
              </a>
              <ButtonLink
                href={site.bookingHref}
                className="mt-4 w-full"
                onClick={() => setOpen(false)}
              >
                Book an Appointment
              </ButtonLink>
            </nav>
          </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
