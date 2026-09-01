import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/5 rounded-2xl border border-green-500/20 p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                I'm a Computer Science & Engineering student at The Ohio State University in the Honors Engineering Program, 
                passionate about full-stack development, AI integration, and practical engineering solutions. 
                Currently an intern at Wahed, building production-grade charitable-endowment platforms.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                I specialize in full-stack web development with Next.js and React, mobile apps with React Native, 
                AI integration with embeddings and LLMs, and IoT systems. I love building products that solve real-world 
                problems, from AI-powered learning platforms to smart home automation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">3.9/4.0</div>
                  <div className="text-white/70">GPA</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">Dec 2027</div>
                  <div className="text-white/70">Graduation</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400 mb-6">Technologies</h3>
              
              {[
                { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C/C++'] },
                { category: 'Frameworks', skills: ['Next.js', 'React', 'React Native', 'Node.js', 'FastAPI', 'Tailwind CSS'] },
                { category: 'Technologies', skills: ['PostgreSQL', 'Supabase', 'AWS', 'Docker', 'Stripe', 'Linux', 'Firebase'] }
              ].map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="p-4 rounded-lg bg-black/40 border border-green-500/10"
                >
                  <h4 className="text-green-400 font-medium mb-2">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
