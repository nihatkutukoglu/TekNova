import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyTekNova from '@/components/WhyTekNova';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Packages from '@/components/Packages';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyTekNova />
      <Process />
      <Projects />
      <Packages />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
