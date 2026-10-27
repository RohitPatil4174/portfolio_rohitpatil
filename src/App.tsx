import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineeringSnapshot from './components/EngineeringSnapshot';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UIChrome from './components/UIChrome';

export default function App() {
  return (
    <>
      {/* Global UI chrome: progress bar + custom cursor */}
      <UIChrome />

      {/* Skip-to-content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg-primary focus:font-display focus:font-bold focus:text-sm focus:rounded-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <EngineeringSnapshot />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
