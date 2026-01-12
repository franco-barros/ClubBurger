"use client";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import ContactMe from "../components/contactme";
import WhatsAppButton from "../components/whatsappbutton";
import BackToTheTopButton from "../components/backtotopbutton";
import PracticeAreas from "../components/practiceareas";
import { FAQSection } from "../components/FAQsection";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <AboutUs />

        <PracticeAreas />

        <FAQSection />

        <ContactMe />

        <WhatsAppButton phoneNumber="+542644171075" />

        <BackToTheTopButton />
      </main>
    </div>
  );
}
