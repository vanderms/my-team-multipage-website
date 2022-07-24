import AboutSection from "@/components/sections/about/about";
import CallToActionSection from "@/components/sections/call-to-action/call-to-action";
import ClientsSection from "@/components/sections/clients/clients";
import TeamSection from "@/components/sections/team/team";

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <TeamSection />
      <ClientsSection />
      <CallToActionSection/>
    </main>
  );
}
