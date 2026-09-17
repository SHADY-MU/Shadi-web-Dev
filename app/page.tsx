import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import BackgroundOrbs from "@/components/animations/BackgroundOrbs";

export default function Home() {
  return (
    <div className="page-wrapper relative w-full">
      <ScrollProgress />
      <BackgroundOrbs />
      <Navbar />
      <main className="main-container relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
