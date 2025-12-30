import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './Services.css';

const services = [
  {
    id: '01',
    title: 'No-Code Development',
    description: 'Build powerful applications without writing a single line of code. We leverage platforms like Bubble, WeWeb, and FlutterFlow to deliver MVPs in weeks, not months.',
    href: '/services/no-code',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
        <rect x="26" y="8" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
        <rect x="8" y="26" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
        <rect x="26" y="26" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="4" fill="currentColor"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #00FFC2 0%, #00D4A1 100%)',
  },
  {
    id: '02',
    title: 'Low-Code Solutions',
    description: 'Accelerate development with visual builders combined with custom code. Perfect for complex logic and integrations while maintaining speed and flexibility.',
    href: '/services/low-code',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M14 16L8 24L14 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 16L40 24L34 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 12L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #7B61FF 0%, #5A45D6 100%)',
  },
  {
    id: '03',
    title: 'AI Development',
    description: 'Integrate cutting-edge AI into your products. From ChatGPT-powered features to custom ML models, we make artificial intelligence accessible and practical.',
    href: '/services/ai-development',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="36" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 16V20M24 20L12 28M24 20L36 28" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #FF61DC 0%, #D44BB8 100%)',
  },
  {
    id: '04',
    title: 'Automation & Integration',
    description: 'Connect your tools and automate workflows. We build seamless integrations using Zapier, Make, and custom APIs to eliminate manual work.',
    href: '/services/automation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 24H16M32 24H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 8V16M24 32V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 20L28 28M28 20L20 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #FF8C42 0%, #E07530 100%)',
  },
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={service.href}
        className="service-card"
      >
        <div className="card-glow" style={{ background: service.gradient }} />
        
        <div className="card-header">
          <span className="card-number">{service.id}</span>
          <div className="card-icon" style={{ color: service.gradient.match(/#[A-Fa-f0-9]{6}/)?.[0] }}>
            {service.icon}
          </div>
        </div>
        
        <h3 className="card-title">{service.title}</h3>
        <p className="card-description">{service.description}</p>
        
        <div className="card-footer">
          <span className="learn-more">
            Learn more
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} id="services" className="services">
      <div className="services-bg">
        <div className="services-gradient" />
      </div>

      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.span>
          
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Building the future,
            <br />
            <span className="font-serif italic">one app at a time</span>
          </motion.h2>
          
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We combine modern technology stacks with creative problem-solving 
            to deliver exceptional digital products faster than ever.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="cta-text">Have a project in mind?</p>
          <a href="#contact" className="cta-link" data-cursor="Let's talk">
            Let's discuss
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

