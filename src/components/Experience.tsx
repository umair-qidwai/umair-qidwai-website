import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

type TimelineEntry = {
  title: string;
  organization: string;
  period: string;
  description?: string;
  technologies?: string[];
  logo: string;
  // Plate color matches the logo's own background so the image blends into the tile
  logoPlate: string;
  logoPadding?: string;
};

const experiences: TimelineEntry[] = [
  {
    title: "Software Engineer Intern",
    organization: "Wahed — Remote",
    period: "August 2026 - Present",
    description: "Developed iWaqf, a production full-stack charitable-endowment platform, with a team of four interns. Partnered with Wahed engineers and the founder to translate requirements into shipped frontend and backend features.",
    technologies: ["TypeScript", "React", "Backend Architecture", "Full Stack", "Production"],
    logo: "/images/companies/wahed_logo.png",
    logoPlate: "bg-[#111315]",
    logoPadding: "p-1.5 md:p-2"
  },
  {
    title: "Software Engineer Intern",
    organization: "American Honda Motor Company, Inc. — Raymond, OH",
    period: "May 2026 - September 2026",
    description: "Consolidated Python data pipelines onto a centralized server and PostgreSQL database, simplifying Power BI reporting across 100K+ license records. Automated crane inspections and AWS Bedrock key provisioning, then built a full-stack AI analytics assistant for read-only SQL analysis.",
    technologies: ["Python", "PostgreSQL", "Power BI", "AWS Bedrock", "AI Analytics"],
    logo: "/images/companies/honda_logo.jpeg",
    logoPlate: "bg-white",
    logoPadding: "p-1"
  },
  {
    title: "Manufacturing System Engineer",
    organization: "American Honda Motor Company, Inc. — Greensburg, IN",
    period: "August 2025 - December 2025",
    description: "Enhanced PRTG monitoring alerts and dashboards, improved Omnivex Moxie real-time manufacturing displays, and supported Honda's high-availability manufacturing line IT systems.",
    technologies: ["PRTG", "Omnivex Moxie", "Manufacturing IT", "Systems Support"],
    logo: "/images/companies/honda_logo.jpeg",
    logoPlate: "bg-white",
    logoPadding: "p-1"
  },
  {
    title: "AI Software Engineer",
    organization: "EZO — Austin, TX",
    period: "May 2025 - July 2025",
    description: "Developed a context-aware AI chatbot with vector search and scalable FastAPI services, reducing response latency by 25%. Integrated a lightweight frontend and deployed the full-stack solution with optimized prompts and embeddings-based retrieval.",
    technologies: ["Vector Search", "FastAPI", "RAG", "Embeddings", "Full Stack"],
    logo: "/images/companies/ezosolutions_logo.jpeg",
    logoPlate: "bg-white"
  },
  {
    title: "Full-stack Developer",
    organization: "Cybersense — Dublin, OH",
    period: "August 2024 - May 2025",
    description: "Designed a cross-platform real estate matching app with Supabase authentication, secure Python APIs, scalable Postgres storage, and React Native and SwiftUI frontends.",
    technologies: ["React Native", "SwiftUI", "Python", "FastAPI", "Supabase"],
    logo: "/images/companies/gocybersense_logo.jpeg",
    logoPlate: "bg-[#0a0408]"
  }
];

const education: TimelineEntry[] = [
  {
    title: "The Ohio State University",
    organization: "Bachelor of Science, Computer Science & Engineering",
    period: "August 2024 - December 2027",
    description: "Honors Engineering student",
    logo: "/images/companies/osu_logo.jpeg",
    logoPlate: "bg-[#eaeaea]"
  },
  {
    title: "Harvard Online",
    organization: "CS50 Certificate, Computer Science",
    period: "June 2025 - November 2025",
    logo: "/images/companies/harvardx_logo.jpeg",
    logoPlate: "bg-[#dadad2]"
  },
  {
    title: "Google",
    organization: "Project Management Professional Certificate (Coursera)",
    period: "2023",
    logo: "/images/companies/google_logo.jpeg",
    logoPlate: "bg-white",
    logoPadding: "p-1"
  }
];

const Timeline = ({ entries }: { entries: TimelineEntry[] }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 75%", "end 55%"]
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-5xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-8 top-0 w-[3px] -translate-x-1/2 overflow-hidden rounded-full bg-white/10 md:left-1/2"
      >
        <motion.div
          style={{ scaleY: progress }}
          className="h-full w-full origin-top rounded-full bg-gradient-to-b from-green-300 via-green-500 to-green-500/0 shadow-[0_0_18px_rgba(74,222,128,0.6)]"
        />
      </div>

      <div className="relative flex flex-col">
        {entries.map((entry, index) => {
          const onLeft = index % 2 === 0;

          return (
            <div
              key={`${entry.title}-${entry.period}`}
              className="grid grid-cols-[4rem_minmax(0,1fr)] items-start gap-4 pb-10 last:pb-0 md:grid-cols-[minmax(0,1fr)_8rem_minmax(0,1fr)] md:gap-0 md:pb-14"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="col-start-1 row-start-1 flex justify-center pt-2 md:col-start-2"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-green-500/40 shadow-[0_0_22px_rgba(74,222,128,0.25)] md:h-24 md:w-24 md:rounded-3xl ${entry.logoPlate} ${entry.logoPadding ?? ''}`}
                >
                  <img
                    src={entry.logo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: onLeft ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`col-start-2 row-start-1 rounded-xl border border-green-500/20 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-green-500/40 hover:bg-white/10 md:p-6 ${
                  onLeft ? 'md:col-start-1 md:mr-6' : 'md:col-start-3 md:ml-6'
                }`}
              >
                <span className="text-sm text-white/60">{entry.period}</span>
                <h3 className="mt-1 text-lg font-bold text-white md:text-xl">{entry.title}</h3>
                <p className="font-medium text-green-400">{entry.organization}</p>

                {entry.description && (
                  <p className="mt-3 leading-relaxed text-white/80">{entry.description}</p>
                )}

                {entry.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm text-green-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SectionHeading = ({ children }: { children: string }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="mb-12 text-center text-4xl font-bold text-green-400 md:text-5xl"
  >
    {children}
  </motion.h2>
);

const Experience = () => (
  <section id="experience" className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <SectionHeading>Experience</SectionHeading>
      <Timeline entries={experiences} />

      <div className="mt-20 border-t border-green-500/20 pt-12">
        <SectionHeading>Education</SectionHeading>
        <Timeline entries={education} />
      </div>
    </div>
  </section>
);

export default Experience;
