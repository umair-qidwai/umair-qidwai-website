
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Study Studio LMS",
      description: "Built and launched an AI-powered full-stack learning management system with Stripe payments and cross-platform support. Engineered AI study tools using Anthropic for quiz generation and context-aware Q&A. Built core LMS workflows including assignments, grading, attendance, student notes, and real-time multiplayer quizzes. Shipped on web, iOS, and Android.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Anthropic", "Stripe", "Capacitor"],
      image: "/images/projects/study-studio.jpg",
      link: "https://www.studystudioapp.com/",
      status: "Jun. 2026 - Present"
    },
    {
      title: "Smart Home Automation",
      description: "Converted a legacy home security system into a fully networked smart home using Arduino and Home Assistant. Engineered smart garage door opener with microcontroller and reed switch, smart blinds and drawer locks using servo motors with NFC authentication over MQTT. Recently integrated a 3D printer into the IoT network for remote monitoring and control.",
      technologies: ["Embedded Systems", "IoT", "MQTT", "Arduino", "Home Assistant", "Linux"],
      image: "/images/projects/smart-home.jpg",
      status: "Jun. 2022 - Jul. 2024"
    },
    {
      title: "Shariah Compliant Stocks API",
      description: "Built a backend API that evaluates financial instruments and returns Shariah-compliant stocks based on the most popular ETF holdings. Integrated screening logic for Islamic finance compliance and created a queryable database of vetted securities.",
      technologies: ["Python", "FastAPI", "Financial Data", "REST API", "PostgreSQL"],
      image: "/images/projects/shariah-holdings.jpg",
      link: "https://stocks.umairqidwai.com/",
      status: "2024 - 2025"
    },
    {
      title: "Residence - Home Discovery App",
      description: "Developed a house-discovery app that gamifies home hunting with swipe mechanics. Users swipe through properties based on preferences, creating a fun and intuitive way to discover homes. Built with React Native for cross-platform mobile experience.",
      technologies: ["React Native", "TypeScript", "Swipe Mechanics", "Mobile", "Real Estate"],
      image: "/images/projects/residence.jpg",
      status: "2025"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className={`group relative backdrop-blur-sm bg-white/5 rounded-xl border border-green-500/20 overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                project.link ? 'cursor-pointer' : ''
              }`}
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-inset"
                />
              )}

              <div className="aspect-video overflow-hidden bg-gradient-to-br from-green-900/20 to-green-600/10">
                <img
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                  }}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {project.link && (
                      <ExternalLink
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 text-green-400 opacity-70 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </div>
                  <span className="shrink-0 text-sm text-green-400 bg-green-500/20 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
