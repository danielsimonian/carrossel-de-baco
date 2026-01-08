import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Music from '@/components/Music';
import Shows from '@/components/Shows';
import Band from '@/components/Band';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Band />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
