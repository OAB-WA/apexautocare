"use client";

import Link from "next/link";
import { ArrowUp, Phone, MapPin, ShieldCheck, Mail } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 bg-secondary/80 text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Wordmark & Brand Mission (Span 4) */}
          <div className="lg:col-span-4">
            <Wordmark />
            <p className="mt-4 max-w-sm text-xs text-muted leading-relaxed">
              Austin’s trusted independent automotive service center. Combining
              dealer-level diagnostics and master ASE craftsmanship with transparent,
              digital-first customer care.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-foreground/80">
              <ShieldCheck className="size-4 text-accent" />
              <span>12-Month / 12,000-Mile Warranty on All Repairs</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={site.bookingHref}
                  className="font-semibold text-accent hover:underline"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
              Core Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-muted">
              <li>
                <a href="#services" className="hover:text-foreground">
                  Check Engine & Computer Diagnostics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  Brake Pad & Rotor Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  A/C Recharge & Climate Control
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  Timing Belts & Engine Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  Laser 4-Wheel Alignment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  Synthetic Oil & Factory Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Austin Contact Info (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
              Austin Shop
            </h4>
            <div className="mt-4 space-y-3 text-xs text-muted">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-accent" />
                <span>{site.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 text-accent" />
                <a
                  href={site.phoneHref}
                  className="font-semibold text-foreground transition-colors hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0 text-accent" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-muted">
                Mon - Fri: 7:30 AM - 6:00 PM
                <br />
                Sat: 8:00 AM - 2:00 PM | Sun: Closed
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. Austin, Texas.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground transition-all hover:border-white/20 hover:bg-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
