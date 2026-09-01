import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-green-500/20' : ''
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
            {['about', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/80 hover:text-green-400 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 rounded-full px-4 py-2 transition-all"
          >
            <Download size={16} />
            <span>Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
