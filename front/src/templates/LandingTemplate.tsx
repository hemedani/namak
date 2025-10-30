import HeaderOrganism from '@/organisms/Header';
import HeroOrganism from '@/organisms/Hero';
import FeaturesOrganism from '@/organisms/Features';
import AboutOrganism from '@/organisms/About';
import TestimonialsOrganism from '@/organisms/Testimonials';
import FooterOrganism from '@/organisms/Footer';

interface LandingTemplateProps {
  children?: React.ReactNode;
}

const LandingTemplate = ({ children }: LandingTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderOrganism />
      <main className="flex-grow">
        {children}
      </main>
      <FooterOrganism />
    </div>
  );
};

export default LandingTemplate;
