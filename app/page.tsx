import AdjacentBusinessSection from "@/components/adjacent-business-section";
import ConsultingTipsSection from "@/components/consulting-tips-section";
import ContactSection from "@/components/contact-section";
import GoalSection from "@/components/goal-section";
import HeroSection from "@/components/hero-section";
import ServicesFeatureSection from "@/components/services-feature-section";
import ServicesListSection from "@/components/services-list-section";
import TestimonialsSection from "@/components/testimonials-section";
import WhatWeDoSection from "@/components/what-we-do-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesFeatureSection />
      <GoalSection />
      <ServicesListSection />
      <ConsultingTipsSection />
      <AdjacentBusinessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
