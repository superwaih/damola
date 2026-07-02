import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorksMarquee from "@/components/SelectedWorksMarquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import BottomSlider from "@/components/BottomSlider";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#000000]">
      <Navbar />
      <Hero />
      <SelectedWorksMarquee />
      <Projects />
      <About />
      <Mission />
      <Services />
      <BottomSlider />
      <Testimonials />
      <Footer />
    </main>
  );
}
