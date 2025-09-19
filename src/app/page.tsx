import { AboutSection } from "@/sections/About";
import { BlogSection } from "@/sections/Blog";
import { ContactSection } from "@/sections/Contact";
import { FooterSection } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { JourneySection } from "@/sections/Journey";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <JourneySection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
