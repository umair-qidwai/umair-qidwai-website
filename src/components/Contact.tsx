
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/5 rounded-2xl border border-green-500/20 p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="mailto:umairqidwai4@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/umair-qidwai/"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="https://github.com/umair-qidwai"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://x.com/umairqidwai2"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
        
        <footer className="mt-12 pt-8 border-t border-green-500/20">          <p className="text-white/60">
            © 2025 Umair Qidwai. Crafted with passion and precision.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
