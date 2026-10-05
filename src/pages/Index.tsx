import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import CodeBackground from '../components/CodeBackground';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <CodeBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        {/* Soft glows drawn as gradients: blur filters flicker on iOS while compositing */}
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] translate-x-16 translate-y-16 bg-[radial-gradient(circle,rgba(34,197,94,0.05)_35%,transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-[22rem] h-[22rem] -translate-x-12 -translate-y-12 bg-[radial-gradient(circle,rgba(74,222,128,0.05)_35%,transparent_70%)]" />
        <div className="absolute top-3/4 right-1/4 w-[18rem] h-[18rem] translate-x-12 -translate-y-12 bg-[radial-gradient(circle,rgba(59,130,246,0.05)_35%,transparent_70%)]" />
      </div>
    </div>
  );
};

export default Index;
