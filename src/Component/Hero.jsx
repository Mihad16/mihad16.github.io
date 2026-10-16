import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      ref={ref}
      style={{ backgroundColor: 'var(--beige)', minHeight: '100vh', paddingTop: '5rem' }}
      className="relative overflow-hidden"
    >
      {/* Top label */}
      <motion.div
        className="absolute top-24 left-6 md:left-12"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p style={{ fontFamily: "'Space Mono', monospace", color: 'var(--ink-muted)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          ASPIRING
        </p>
        <p style={{ fontFamily: "'Space Mono', monospace", color: 'var(--ink)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'underline' }}>
          FULL-STACK DEV
        </p>
      </motion.div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

          {/* LEFT — Name Block */}
          <div className="relative">
            {/* Smiley + MIHAD */}
            <motion.div
              className="flex items-center gap-4 mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div style={{ border: '2.5px solid var(--ink)', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', flexShrink: 0 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                MIHAD
              </h1>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--ink-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', alignSelf: 'flex-end', paddingBottom: '0.8rem' }}>ABOOBACKER</span>
            </motion.div>

            {/* Curved arrow */}
            <motion.div className="relative ml-4 mb-2" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.5 }}>
              <svg width="100" height="55" viewBox="0 0 100 55" fill="none">
                <path d="M10 8 C 40 4, 78 28, 83 48" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M73 40 L 83 48 L 78 36" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </motion.div>

            {/* ABOOBACKER box */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4, duration: 0.7 }}>
              <div style={{ border: '3px solid var(--ink)', padding: '0.4rem 1.2rem', display: 'inline-block', marginBottom: '1.5rem' }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1 }}>
                  ABOOBACKER
                </h2>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: 'var(--ink-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.25rem' }}>Kasaragod, Kerala, India</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              style={{ color: 'var(--ink-light)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.92rem', lineHeight: 1.75, maxWidth: '380px', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Aboobacker Mihad is an aspiring full-stack developer with 1.5+ years
              of experience building modern web applications using React, Django,
              and modern design systems — based in Kasaragod, Kerala, India.
            </motion.p>

            {/* Project highlights */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '1.1rem', color: 'var(--ink)' }}>✦</span>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)' }}>MASJID SYSTEM</p>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', marginLeft: '22px' }}>Full stack management app — React + Django</p>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '1.1rem', color: 'var(--ink)' }}>✦</span>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink)' }}>PORTFOLIO 2025</p>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', marginLeft: '22px' }}>GitHub Pages — Vite + React + Framer Motion</p>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.a
                href="#work"
                style={{ fontFamily: "'Space Mono', monospace", background: 'var(--ink)', color: 'var(--beige)', border: '2px solid var(--ink)', padding: '0.65rem 1.5rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block', textDecoration: 'none' }}
                whileHover={{ backgroundColor: 'var(--beige)', color: 'var(--ink)' }}
                transition={{ duration: 0.2 }}
              >
                VIEW MY WORK ↓
              </motion.a>
              <motion.a
                href="#connect"
                style={{ fontFamily: "'Space Mono', monospace", background: 'transparent', color: 'var(--ink)', border: '2px solid var(--ink)', padding: '0.65rem 1.5rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block', textDecoration: 'none' }}
                whileHover={{ backgroundColor: 'var(--ink)', color: 'var(--beige)' }}
                transition={{ duration: 0.2 }}
              >
                CONNECT →
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            className="flex flex-col items-center lg:items-end mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div style={{ border: '3px solid var(--ink)', width: '320px', height: '400px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/src/assets/image1.jpeg"
                  alt="Mihad Choudhury — Full Stack Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(15%) contrast(1.05)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(232,228,217,0.06)', mixBlendMode: 'multiply' }} />
              </div>

              {/* Tag offset */}
              <motion.div
                className="absolute -bottom-4 -right-4"
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{ background: 'var(--ink)', color: 'var(--beige)', padding: '0.5rem 1.2rem', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  ASPIRING FULL-STACK DEV
                </div>
              </motion.div>
            </div>

            {/* Spinning circle */}
            <motion.div
              className="mt-12"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              style={{ width: '90px', height: '90px' }}
            >
              <svg viewBox="0 0 90 90" width="90" height="90">
                <defs>
                  <path id="circle-text-hero" d="M 45,45 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
                </defs>
                <text style={{ fontSize: '9px', fontFamily: "'Space Mono', monospace", fill: 'var(--ink)', fontWeight: 700 }}>
                  <textPath href="#circle-text-hero">
                    ★ REACT ★ DJANGO ★ PYTHON ★ MYSQL ★
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{ height: '2px', backgroundColor: 'var(--ink)', width: '100%' }} />
    </section>
  );
};

export default Hero;
