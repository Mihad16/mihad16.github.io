import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--ink)', padding: '2.5rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left */}
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--beige)', letterSpacing: '0.1em', opacity: 0.7 }}>
            © {currentYear} ABOOBACKER MIHAD
          </p>

          {/* Center */}
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--beige)', letterSpacing: '0.1em', opacity: 0.7 }}>
            ASPIRING FULL-STACK DEV · KASARAGOD, INDIA
          </p>

          {/* Right */}
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--beige)', letterSpacing: '0.1em', opacity: 0.7 }}>
            BUILT WITH REACT ♥
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
