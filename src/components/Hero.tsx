import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-[11vw] md:text-8xl font-bold whitespace-nowrap">
            <span className="text-white">Umair</span>{' '}
            <span className="text-green-400">Qidwai</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Computer Science & Engineering Student at The Ohio State University
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-green-400/80"
          >
            <span>React Native</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>Java</span>
            <span>•</span>
            <span>IoT</span>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-[15vh] md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={scrollToAbout}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowDown size={32} className="animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
