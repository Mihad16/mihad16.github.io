import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "MASJID MANAGEMENT SYSTEM",
    date: "2024 — ONGOING",
    stack: ["React", "Django", "PostgreSQL"],
    desc: "A full-featured management system for mosques — member records, donations, announcements, and scheduling. Full stack with REST API.",
    github: "https://github.com/Mihad16",
    highlight: "Full Stack Web App",
  },
  {
    id: 2,
    title: "DEVELOPER PORTFOLIO",
    date: "2025",
    stack: ["React", "Vite", "Framer Motion"],
    desc: "Personal portfolio deployed on GitHub Pages. Editorial design with collage layout, smooth animations, and responsive design.",
    github: "https://github.com/Mihad16",
    highlight: "GitHub Pages",
  },
  {
    id: 3,
    title: "E-COMMERCE STOREFRONT",
    date: "2024",
    stack: ["React", "Django REST", "MySQL"],
    desc: "Full stack e-commerce platform with product listings, cart management, user authentication, and order tracking.",
    github: "https://github.com/Mihad16",
    highlight: "Full Stack Commerce",
  },
  {
    id: 4,
    title: "WORDPRESS BUSINESS SITES",
    date: "2023 — 2024",
    stack: ["WordPress", "PHP", "CSS"],
    desc: "Delivered 10+ custom WordPress websites for local businesses and creatives in India — e-commerce, portfolios, landing pages.",
    github: "https://github.com/Mihad16",
    highlight: "Client Work",
  },
];

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      style={{ backgroundColor: 'var(--beige)', padding: '5rem 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          className="flex items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--ink)' }}>
              MY{' '}
            </h2>
            <div style={{ border: '2.5px solid var(--ink)', padding: '0.15rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--ink)' }}>
                WORK
              </h2>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Bio blurb */}
        <motion.p
          className="mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--ink-light)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '600px', fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Aboobacker Mihad is an aspiring full-stack developer with over
          1.5 years of experience building web applications using React, Django,
          and PostgreSQL — based in Kasaragod, Kerala, India.
        </motion.p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ borderTop: '2px solid var(--ink)', borderLeft: '2px solid var(--ink)' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              style={{ borderRight: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', padding: '2rem' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ backgroundColor: 'var(--beige-dark)' }}
            >
              {/* Project number + highlight */}
              <div className="flex justify-between items-start mb-4">
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--ink-muted)', fontWeight: 700, letterSpacing: '0.1em' }}>
                  ✦ {project.highlight.toUpperCase()}
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--ink-muted)' }}>
                  {project.date}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
                {project.title}
              </h3>

              {/* Desc */}
              <p style={{ fontSize: '0.83rem', color: 'var(--ink-light)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {project.desc}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map(tag => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Link */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                whileHover={{ opacity: 0.7 }}
              >
                VIEW ON GITHUB →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Mihad16"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 700, color: 'var(--ink)', border: '2px solid var(--ink)', padding: '0.7rem 2rem', display: 'inline-block', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}
            whileHover={{ backgroundColor: 'var(--ink)', color: 'var(--beige)' }}
            transition={{ duration: 0.2 }}
          >
            ALL PROJECTS ON GITHUB ↗
          </motion.a>
        </motion.div>
      </div>

      {/* Divider */}
      <div style={{ height: '2px', backgroundColor: 'var(--ink)', width: '100%', marginTop: '5rem' }} />
    </section>
  );
};

export default AboutMe;
