
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

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
            Let's Connect
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Have a project or opportunity in mind? I'd love to hear from you.
          </p>

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
              href="mailto:umairqidwai4@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
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
