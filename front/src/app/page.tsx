import LandingTemplate from "@/templates/LandingTemplate";
import HeroOrganism from "@/organisms/Hero";
import FeaturesOrganism from "@/organisms/Features";
import AboutOrganism from "@/organisms/About";
import TestimonialsOrganism from "@/organisms/Testimonials";

export default function Home() {
  return (
    <LandingTemplate>
      <HeroOrganism />
      <FeaturesOrganism />
      <AboutOrganism />
      <TestimonialsOrganism />
    </LandingTemplate>
  );
}
