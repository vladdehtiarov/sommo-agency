import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import './Hero.css';

const AnimatedText = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="animated-text-wrapper">
      <motion.span
        className="animated-text"
        initial={{ y: '100%', rotateX: -90 }}
        animate={isInView ? { y: 0, rotateX: 0 } : {}}
        transition={{
          duration: 1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const FloatingOrb = ({ size, color, delay, duration, x, y }) => (
  <motion.div
    className="floating-orb"
    style={{
      width: size,
      height: size,
      background: color,
      left: x,
      top: y,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '10x', label: 'Faster Development' },
    { number: '50+', label: 'Happy Clients' },
  ];

  return (
    <section ref={containerRef} className="hero">
      {/* Background elements */}
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <FloatingOrb size={600} color="radial-gradient(circle, rgba(123, 97, 255, 0.15) 0%, transparent 70%)" delay={0} duration={8} x="60%" y="20%" />
        <FloatingOrb size={400} color="radial-gradient(circle, rgba(0, 255, 194, 0.1) 0%, transparent 70%)" delay={2} duration={10} x="10%" y="60%" />
        <FloatingOrb size={300} color="radial-gradient(circle, rgba(255, 97, 220, 0.1) 0%, transparent 70%)" delay={4} duration={12} x="80%" y="70%" />
      </div>

      <motion.div 
        className="hero-content container"
        style={{ y: springY, opacity: springOpacity, scale: springScale }}
      >
        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="eyebrow-dot" />
          <span>No-Code • Low-Code • AI Development</span>
        </motion.div>

        {/* Main headline */}
        <h1 className="hero-headline">
          <AnimatedText delay={0.3}>We Build</AnimatedText>
          <br />
          <AnimatedText delay={0.4}>
            <span className="text-gradient">Digital Products</span>
          </AnimatedText>
          <br />
          <AnimatedText delay={0.5}>
            <span className="font-serif italic">10x Faster</span>
          </AnimatedText>
        </h1>

        {/* Subheadline */}
        <motion.p
          className="hero-subheadline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Sommo Agency transforms your ideas into powerful web and mobile applications 
          using cutting-edge no-code, low-code, and AI technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#contact" className="cta-primary" data-cursor="Start">
            <span>Start Your Project</span>
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work" className="cta-secondary" data-cursor="View">
            <span>View Our Work</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

