import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '10x', label: 'Faster Development' },
    { number: '50+', label: 'Happy Clients' },
  ];

  return (
    <section ref={containerRef} className="hero">
      {/* Background elements - static, no animations */}
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="static-orb orb-1" />
        <div className="static-orb orb-2" />
        <div className="static-orb orb-3" />
      </div>

      <div className="hero-content container">
        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-dot" />
          <span>No-Code • Low-Code • AI Development</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Build
          <br />
          <span className="text-gradient">Digital Products</span>
          <br />
          <span className="font-serif italic">10x Faster</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sommo Agency transforms your ideas into powerful web and mobile applications 
          using cutting-edge no-code, low-code, and AI technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="cta-primary">
            <span>Start Your Project</span>
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work" className="cta-secondary">
            <span>View Our Work</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - CSS animation only */}
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
};

