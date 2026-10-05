import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen min-h-svh flex items-center justify-center relative px-6">
      <div className="text-center z-10">
        <div className="hero-fade-up space-y-6">
          <h1 className="text-[11vw] md:text-8xl font-bold whitespace-nowrap">
            <span className="text-white">Umair</span>{' '}
            <span className="text-green-400">Qidwai</span>
          </h1>
          
          <p
            style={{ animationDelay: '0.3s' }}
            className="hero-fade text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Computer Science & Engineering Student at The Ohio State University
          </p>
          
          <div
            style={{ animationDelay: '0.6s' }}
            className="hero-fade flex flex-wrap justify-center gap-4 text-green-400/80"
          >
            <span>React Native</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>Java</span>
            <span>•</span>
            <span>IoT</span>
          </div>
        </div>
        
        <div
          style={{ animationDelay: '1s' }}
          className="hero-fade absolute bottom-[15svh] md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={scrollToAbout}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowDown size={32} className="animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
