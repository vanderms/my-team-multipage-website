import HeroSection from "@/components/sections/hero/hero";
import FeaturesSection from "@/components/sections/features/features";
import TestimonialsSection from "@/components/sections/testimonials/testimonials";
import CallToActionSection from "@/components/sections/call-to-action/call-to-action";

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
