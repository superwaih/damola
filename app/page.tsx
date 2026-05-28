import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#000000]">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
