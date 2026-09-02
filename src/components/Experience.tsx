
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
      title: "Software Engineer Intern",
      company: "Wahed — Remote",
      organization: "Wahed",
      period: "August 2026 - Present",
      description: "Developed iWaqf, a production full-stack charitable-endowment platform, with a team of four interns. Partnered with Wahed engineers and the founder to translate requirements into shipped frontend and backend features.",
      technologies: ["TypeScript", "React", "Backend Architecture", "Full Stack", "Production"],
      logo: "/images/companies/wahedinvest_logo.jpeg",
      logoWidth: 256,
      logoHeight: 256,
      logoClassName: "h-[4.3rem] w-[4.3rem] scale-[1.22]",
      logoSurface: "border-white/10 bg-[#111315]"
    },
    {
      title: "Software Engineer Intern",
      company: "American Honda Motor Company, Inc. — Raymond, OH",
      organization: "American Honda Motor Company, Inc. — Software Engineer Intern",
      period: "May 2026 - September 2026",
      description: "Consolidated Python data pipelines onto a centralized server and PostgreSQL database, simplifying Power BI reporting across 100K+ license records. Automated crane inspections and AWS Bedrock key provisioning, then built a full-stack AI analytics assistant for read-only SQL analysis.",
      technologies: ["Python", "PostgreSQL", "Power BI", "AWS Bedrock", "AI Analytics"],
        logo: "/images/companies/honda_logo.jpeg",
      logoWidth: 801,
      logoHeight: 567,
      logoClassName: "h-14 w-14 scale-100",
      logoSurface: "border-white/10 bg-[#111315]"
    },
    {
      title: "Manufacturing System Engineer",
      company: "American Honda Motor Company, Inc. — Greensburg, IN",
      organization: "American Honda Motor Company, Inc. — Manufacturing System Engineer",
      period: "August 2025 - December 2025",
      description: "Enhanced PRTG monitoring alerts and dashboards, improved Omnivex Moxie real-time manufacturing displays, and supported Honda's high-availability manufacturing line IT systems.",
      technologies: ["PRTG", "Omnivex Moxie", "Manufacturing IT", "Systems Support"],
        logo: "/images/companies/honda_logo.jpeg",
      logoWidth: 801,
      logoHeight: 567,
      logoClassName: "h-14 w-14 scale-100",
      logoSurface: "border-white/10 bg-[#111315]"
    },
    {
      title: "AI Software Engineer",
      company: "EZO — Austin, TX",
      organization: "EZO",
      period: "May 2025 - July 2025",
      description: "Developed a context-aware AI chatbot with vector search and scalable FastAPI services, reducing response latency by 25%. Integrated a lightweight frontend and deployed the full-stack solution with optimized prompts and embeddings-based retrieval.",
      technologies: ["Vector Search", "FastAPI", "RAG", "Embeddings", "Full Stack"],
        logo: "/images/companies/ezosolutions_logo.jpeg",
      logoWidth: 216,
      logoHeight: 216,
      logoClassName: "h-[4.3rem] w-[4.3rem] scale-[1.22]",
      logoSurface: "border-white/10 bg-[#111315]"
    },
    {
      title: "Full-stack Developer",
      company: "Cybersense — Dublin, OH",
      organization: "Cybersense",
      period: "August 2024 - May 2025",
      description: "Designed a cross-platform real estate matching app with Supabase authentication, secure Python APIs, scalable Postgres storage, and React Native and SwiftUI frontends.",
      technologies: ["React Native", "SwiftUI", "Python", "FastAPI", "Supabase"],
      logo: "/images/companies/gocybersense_logo.jpeg",
      logoWidth: 0,
      logoHeight: 0,
      logoClassName: "h-[4.3rem] w-[4.3rem] scale-[1.22]",
      logoSurface: "border-white/10 bg-[#111315]"
    }
  ];

  const education = [
    { school: "The Ohio State University", degree: "Bachelor of Science, Computer Science & Engineering", period: "August 2024 - December 2027", details: "Honors Engineering student", logo: "/images/companies/osu_logo.jpeg" },
    { school: "Harvard Online", degree: "CS50 Certificate, Computer Science", period: "June 2025 - November 2025", details: "", logo: "/images/companies/harvardx_logo.jpeg" },
    { school: "Google", degree: "Project Management Professional Certificate (Coursera)", period: "2023", details: "", logo: "/images/companies/google_logo.jpeg" }
  ];

  return (    <section ref={sectionRef} id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: (index + 2) * 0.1, duration: 0.5, ease: "easeOut" }}
              className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-4 mb-5 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:items-center">
                <div className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border shadow-lg shadow-black/20 ${exp.logoSurface}`}>
                  {exp.logoText ? (
                    <span className={`font-bold lowercase tracking-[-0.04em] ${exp.logoText === "honda" ? "text-[0.65rem] text-[#e60012]" : "text-2xl text-white"}`}>{exp.logoText}</span>
                  ) : exp.logo && (
                    <img
                      src={exp.logo}
                      alt=""
                      aria-hidden="true"
                      width={exp.logoWidth}
                      height={exp.logoHeight}
                      loading="lazy"
                      decoding="async"
                      className={`${exp.logoClassName} object-contain`}
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-green-400 font-medium">{exp.company}</p>
                  <span className="mt-1 block text-sm text-white/60 md:hidden">{exp.period}</span>
                </div>

                <span className="hidden whitespace-nowrap text-sm text-white/60 md:block md:text-base">
                  {exp.period}
                </span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: experiences.length * 0.1, duration: 0.5, ease: "easeOut" }}
            className="border-t border-green-500/20 pt-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-8 text-center">Education</h2>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.school} className="backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#111315] shadow-lg shadow-black/20">
                        <img src={item.logo} alt="" aria-hidden="true" width="200" height="200" loading="lazy" decoding="async" className="h-[4.3rem] w-[4.3rem] scale-[1.22] object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.school}</h3>
                        <p className="text-green-400 font-medium">{item.degree}</p>
                      </div>
                    </div>
                    <span className="text-white/60 text-sm md:text-base md:text-right">{item.period}</span>
                  </div>
                  {item.details && <p className="mt-3 text-white/80 leading-relaxed">{item.details}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
