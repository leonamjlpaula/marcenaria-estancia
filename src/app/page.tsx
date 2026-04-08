import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import Industrial from "@/components/Industrial";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-surface text-on-surface selection:bg-primary-fixed">
      <Nav />
      <Hero />
      <Story />
      <Projects />
      <Industrial />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
