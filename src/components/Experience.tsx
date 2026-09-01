
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -20% 0px",
    amount: 0.2
  });

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Wahed — Remote",
      period: "Aug. 2026 - Present",
      description: "Developed iWaqf, a production full-stack charitable-endowment platform, with a team of four interns. Partnered with Wahed engineers and the founder to translate requirements into shipped frontend and backend features that enable charitable giving at scale.",
      technologies: ["TypeScript", "React", "Backend Architecture", "Full Stack", "Production"]
    },
    {
      title: "Software Engineering Co-op",
      company: "American Honda Motor — Raymond, OH",
      period: "May 2026 - Aug. 2026",
      description: "Consolidated two Python data pipelines onto centralized PostgreSQL database simplifying Power BI reporting. Automated crane inspections with Power Automate (80% paperwork reduction). Built a full-stack AI analytics assistant translating natural-language queries into SQL.",
      technologies: ["Python", "PostgreSQL", "Power BI", "AWS Bedrock", "AI Analytics"]
    },
    {
      title: "AI Software Engineering Intern",
      company: "EZO Solution — Austin, TX",
      period: "May 2025 - Jul. 2025",
      description: "Developed and deployed a RAG-based AI chatbot using embeddings and vector search for domain-specific Q&A. Optimized semantic retrieval and prompting, achieving 98% response accuracy. Integrated PaddleOCR for multimodal document and image queries.",
      technologies: ["Vector Search", "RAG", "PaddleOCR", "LLM Integration", "Embeddings"]
    }
  ];

  return (    <section ref={sectionRef} id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center"
        >
          Experience & Education
        </motion.h2>
        
        <div className="space-y-8">
          {/* Education Section */}          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">B.S. Computer Science & Engineering</h3>
                <p className="text-green-400 font-medium">The Ohio State University</p>
              </div>
              <span className="text-white/60 text-sm md:text-base">Sep. 2024 - Dec. 2027</span>
            </div>
            
            <p className="text-white/80 mb-4 leading-relaxed">
              Honors Engineering Program student with a 3.9/4.0 GPA. Focusing on full-stack development, 
              AI integration, algorithms, and software architecture through rigorous coursework and hands-on projects.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Honors Program
              </span>
              <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                GPA: 3.9/4.0
              </span>
            </div>
          </motion.div>

          {/* Certifications */}          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">HarvardX: CS50x</h3>
                    <p className="text-green-400 font-medium">edX</p>
                  </div>
                  <span className="text-white/60 text-sm md:text-base">2025</span>
                </div>
                <p className="text-white/80 text-sm">Introduction to Computer Science</p>
              </div>
              
              <div className="border-t border-green-500/10 pt-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Google Project Management Certificate</h3>
                    <p className="text-green-400 font-medium">Coursera</p>
                  </div>
                  <span className="text-white/60 text-sm md:text-base">2023</span>
                </div>
                <p className="text-white/80 text-sm">Agile methodologies, team coordination, and project execution</p>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: (index + 2) * 0.1, duration: 0.5, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-green-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-white/60 text-sm md:text-base">{exp.period}</span>
              </div>
              
              <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
