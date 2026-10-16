import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="connect"
      ref={ref}
      style={{ backgroundColor: 'var(--beige)', padding: '5rem 0 3rem' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Photo + connect tag */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ border: '3px solid var(--ink)', width: '280px', height: '340px', overflow: 'hidden' }}>
                <img
                  src="/src/assets/image1.jpeg"
                  alt="Mihad Choudhury — Connect"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(20%) contrast(1.05)' }}
                />
              </div>
              {/* Bottom label */}
              <div style={{ position: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)', background: 'var(--ink)', color: 'var(--beige)', padding: '0.5rem 1.5rem', fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                CONNECT WITH ME
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Contact info + header */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Big heading */}
            <div className="mb-12">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1, marginBottom: '0.5rem' }}>
                CONNECT
              </h2>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1, fontStyle: 'italic' }}>
                with me
              </h2>
            </div>

            {/* Contact items */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="mailto:mihadbornio@me.com"
                  className="hover-underline"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', display: 'block' }}
                >
                  mihadbornio@me.com
                </a>
              </motion.div>

              {/* GitHub */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="https://github.com/mihad16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', display: 'block' }}
                >
                  @mihad16
                </a>
              </motion.div>

              {/* LinkedIn */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="https://www.linkedin.com/in/aboobackermihad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', display: 'block' }}
                >
                  linkedin.com/in/aboobackermihad
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="tel:+919605111666"
                  className="hover-underline"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.9rem', fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', display: 'block' }}
                >
                  +91 96051 11666
                </a>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              href="mailto:mihadbornio@me.com"
              style={{ fontFamily: "'Space Mono', monospace", background: 'transparent', color: 'var(--ink)', border: '2px solid var(--ink)', padding: '0.8rem 2rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'inline-block', textDecoration: 'none', marginTop: '2.5rem' }}
              whileHover={{ backgroundColor: 'var(--ink)', color: 'var(--beige)' }}
              transition={{ duration: 0.2 }}
            >
              START A PROJECT →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
