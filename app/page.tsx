import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { BookingSection } from "@/components/booking-section";
import { Reviews } from "@/components/reviews";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main id="main" className="relative flex flex-col">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <BookingSection />
        <Reviews />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

