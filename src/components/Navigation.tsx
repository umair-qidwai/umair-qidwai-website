import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { prefetchResume, resumeUrl } from '@/lib/resume';

const sectionIds = ['about', 'experience', 'projects', 'contact'] as const;
type SectionId = (typeof sectionIds)[number];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;

    if (connection?.saveData) return;

    const preloadWhenVisible = () => {
      if (document.visibilityState === 'visible') void prefetchResume();
    };

    // Start as soon as the link is available, including after returning to a tab.
    preloadWhenVisible();
    document.addEventListener('visibilitychange', preloadWhenVisible);

    return () => {
      document.removeEventListener('visibilitychange', preloadWhenVisible);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateNavigation = () => {
      animationFrame = null;
      setIsScrolled(window.scrollY > 100);

      const marker = (navRef.current?.offsetHeight ?? 72) + 16;
      let currentSection: SectionId | null = null;

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = sectionId;
        }
      });

      const isAtPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      setActiveSection(isAtPageBottom ? 'contact' : currentSection);
    };

    const scheduleUpdate = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const scrollToSection = (id: SectionId | 'top') => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);

      if (section) {
        const navHeight = navRef.current?.offsetHeight ?? 72;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: sectionTop - navHeight - 16,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-green-500/20' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('top')}
            className="text-xl font-bold text-green-400"
          >
            UQ
          </motion.button>
          
          <div className="hidden md:flex items-center space-x-8">
            {sectionIds.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                aria-current={activeSection === item ? 'location' : undefined}
                className={`font-medium transition-colors capitalize ${
                  activeSection === item
                    ? 'text-green-400'
                    : 'text-white/80 hover:text-green-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <a
            href={resumeUrl}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') void prefetchResume();
            }}
            onFocus={(event) => {
              if (event.currentTarget.matches(':focus-visible')) void prefetchResume();
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-manipulation flex items-center space-x-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 rounded-full px-4 py-2 transition-colors"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
