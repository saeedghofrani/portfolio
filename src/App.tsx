import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindMe from "./components/FindMe";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";
import PublicationSection from "./sections/PublicationSection/PublicationSection";
import AlbumSection from "./sections/AlbumSection/AlbumSection";
import ContactSection from "./sections/ContactSection/ContactSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PublicationSection />
      <AlbumSection />
      <ContactSection />
      <Footer />
      <FindMe />
    </div>
  );
};

export default App;
