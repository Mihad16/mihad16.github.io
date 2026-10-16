import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "FRONTEND",
    subtitle: "DEVELOPMENT",
    desc: "Responsive, interactive UIs built with React, JavaScript, and modern CSS — for web and PWA.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="9" height="9"/>
        <rect x="13" y="2" width="9" height="9"/>
        <rect x="13" y="13" width="9" height="9"/>
        <rect x="2" y="13" width="9" height="9"/>
      </svg>
    ),
    title: "BACKEND",
    subtitle: "DEVELOPMENT",
    desc: "Server-side logic, REST APIs, and database solutions using Python / Django and SQL databases.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "WORDPRESS",
    subtitle: "SITES",
    desc: "Custom WordPress websites for businesses, portfolios, e-commerce, and landing pages.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <polyline points="8 21 12 17 16 21"/>
      </svg>
    ),
    title: "WEB",
    subtitle: "DESIGN",
    desc: "Clean, modern UI/UX design using Figma — translating ideas into pixel-perfect, accessible interfaces.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{ backgroundColor: 'var(--beige)', padding: '5rem 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ border: '2.5px solid var(--ink)', padding: '0.5rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '0' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
              SERVICES
            </h2>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', fontWeight: 300, color: 'var(--ink)' }}>
              I OFFER
            </span>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0" style={{ borderTop: '2px solid var(--ink)', borderLeft: '2px solid var(--ink)' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              style={{ borderRight: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', padding: '2.5rem 2rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              whileHover={{ backgroundColor: 'var(--beige-dark)' }}
            >
              <div style={{ color: 'var(--ink)', marginBottom: '1rem' }}>
                {service.icon}
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.12em', lineHeight: 1.3, textDecoration: 'underline' }}>
                  {service.title}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 400, color: 'var(--ink)', letterSpacing: '0.05em' }}>
                  {service.subtitle}
                </p>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills row */}
        <motion.div
          className="mt-16 pt-8"
          style={{ borderTop: '2px solid var(--ink)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1rem' }}>
            TECHNOLOGIES
          </p>
          <div className="flex flex-wrap gap-3">
            {['React', 'Vite', 'JavaScript', 'Python', 'Django', 'MySQL', 'PostgreSQL', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Figma', 'WordPress', 'REST API'].map(tech => (
              <span key={tech} className="tag-pill">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ height: '2px', backgroundColor: 'var(--ink)', width: '100%', marginTop: '5rem' }} />
    </section>
  );
};

export default Services;
